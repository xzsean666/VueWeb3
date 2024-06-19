import * as bitcoin from "bitcoinjs-lib";
import ECPairFactory from 'ecpair';
import * as ecc from 'tiny-secp256k1';
import BIP32Factory from 'bip32';
import * as bip39 from 'bip39';
import mempoolJS from "@mempool/mempool.js";
import { MempoolReturn } from "@mempool/mempool.js/lib/interfaces/index";
import axios from "axios";

type addressFn =
    "getAddress" |
    "getAddressTxs" |
    "getAddressTxsChain" |
    "getAddressTxsMempool" |
    "getAddressTxsUtxo"
type FeeChoice =
    "fastestFee" |
    "halfHourFee" |
    "hourFee" |
    "economyFee" |
    "minimumFee"

type transactionsFn =
    "getTx" |
    "getTxHex" |
    "getTxMerkleBlockProof" |
    "getTxMerkleProof" |
    "getTxOutspend" |
    "getTxOutspends" |
    "getTxRaw" |
    "getTxStatus"

const ECPair = ECPairFactory(ecc);
const bip32 = BIP32Factory(ecc);

class mempoolAPI {
    network: any;
    baseUrlBS: string;
    mempool: MempoolReturn;
    constructor(network = "mainnet") {
        if (network == "mainnet") {

            this.baseUrlBS = "https://blockstream.info/api/"
            this.mempool = mempoolJS({
                hostname: 'mempool.space',
                network: 'mainnet'
            });
        }
        else {
            this.baseUrlBS = "https://blockstream.info/testnet/api/"
            this.mempool = mempoolJS({
                hostname: 'mempool.space',
                network: 'testnet'
            });
        }
    }
    async getAddress(address: string, addressFn: addressFn) {
        const addressInfo = await eval("this.mempool.bitcoin.addresses." + addressFn)({ address: address })
        return addressInfo
    }
    async getTransactions(txid: string, transactionsFn: transactionsFn) {
        const addressInfo = await eval("this.mempool.bitcoin.transactions." + transactionsFn)({ txid })
        return addressInfo
    }
    async sendTransaction(txhex: string) {
        const addressInfo = await this.mempool.bitcoin.transactions.postTx({ txhex })
        return addressInfo
    }
    async getFeesRecommended() {
        const recommendedFee = await this.mempool.bitcoin.fees.getFeesRecommended()
        return recommendedFee
    }
    async getFees(feeChoice?: FeeChoice) {
        const recommendedFee = await this.mempool.bitcoin.fees.getFeesRecommended()
        let fee = 0
        if (!feeChoice) {
            fee = Math.round((recommendedFee.hourFee + recommendedFee.minimumFee) / 2)
            return fee
        }
        fee = eval("recommendedFee." + feeChoice)
        return fee
    }
    async getUTXO_TxHex(utxo: any) {
        utxo.txhex = await this.getTransactions(utxo.txid, "getTxHex")
        return utxo
    }
    async getUTXOS_Fee(address: string, txhex = true) {
        const utxos = this.getAddress(address, "getAddressTxsUtxo")
        const recommendedFee = this.getFees()
        const ur = await Promise.all([utxos, recommendedFee])
        const result = {
            utxos: ur[0],
            feeVbyte: ur[1]
        }
        if (txhex) {
            const tasks = []
            for (const utxo of ur[0]) {
                tasks.push(this.getUTXO_TxHex(utxo))
            }
            const utxosTxHex = await Promise.all(tasks)
            Object.assign(result, { utxos: utxosTxHex })
        }
        return result
    }
    async getBalance(address: string) {
        const data = await this.getAddress(address, "getAddress")
        const balance = (data.chain_stats.funded_txo_sum - data.chain_stats.spent_txo_sum) + (data.mempool_stats.funded_txo_sum - data.mempool_stats.spent_txo_sum)
        return balance
    }
}

class BitcoinUtils {
    network: any;
    networkCode: string;

    constructor(network = "mainnet") {
        this.networkCode = network
        if (network == "mainnet") {
            this.network = bitcoin.networks.bitcoin
        }
        else {
            this.network = bitcoin.networks.testnet
        }
    }
    async newAccount() {
        const keyPair = ECPair.makeRandom({ network: this.network });
        const privateKey = keyPair.privateKey?.toString('hex')
        const result = this.parsePrivateKey(privateKey ? privateKey : "")
        return result
    }
    async parsePrivateKey(privateKey: string) {
        const keyPair = ECPair.fromPrivateKey(Buffer.from(privateKey, 'hex'))
        const p2pkh = bitcoin.payments.p2pkh({ pubkey: keyPair.publicKey, network: this.network, });
        const p2sh = bitcoin.payments.p2sh({
            redeem: bitcoin.payments.p2wpkh({ pubkey: keyPair.publicKey, network: this.network, }),
            network: this.network,
        });
        const p2wpkh = bitcoin.payments.p2wpkh({ pubkey: keyPair.publicKey, network: this.network, });
        const result = {
            wif: keyPair.toWIF(),
            privateKey: keyPair.privateKey?.toString('hex'),
            publicKey: keyPair.publicKey?.toString('hex'),
            address: p2pkh.address,
            segwitAddress: p2wpkh.address,
            segwitAddressP2SH: p2sh.address,
        }
        return result
    }
    async newHDAccount() {
        const mnemonicWords = bip39.generateMnemonic(128)
        const seed = bip39.mnemonicToSeedSync(mnemonicWords);
        const node = bip32.fromSeed(seed, this.network);
        const xprivateKey = node.toBase58()
        let result = await this.parseHDPrivateKey(xprivateKey)
        result = Object.assign(result, { mnemonic: mnemonicWords })
        return result
    }
    async mnemonicToxprivateKey(mnemonicWords: string) {
        const seed = bip39.mnemonicToSeedSync(mnemonicWords);
        const node = bip32.fromSeed(seed, this.network);
        const xprivateKey = node.toBase58()
        return xprivateKey
    }
    async parseHDPrivateKey(xprivateKey: string, index = 0) {
        const node = bip32.fromBase58(xprivateKey, this.network)
        const xwif = node.toWIF()
        const xpublicKey = node.neutered().toBase58();
        const keyPair = node.derive(index)
        const privateKeyIndex = keyPair.privateKey?.toString('hex')
        const account = await this.parsePrivateKey(privateKeyIndex ? privateKeyIndex : "")
        const result = {
            index: index,
            xwif: xwif,
            xprivateKey: xprivateKey,
            xpublicKey: xpublicKey,
            account: account,
        }
        return result
    }
    async sendBitcoin(toAddress: string, valueBTC: number, fromPrivateKey: string, isSegwit = true) {
        const txhex = await this.buildRawTxMempool(toAddress, valueBTC, fromPrivateKey, isSegwit)
        const result = await axios({
            method: "POST",
            url: `https://blockstream.info/testnet/api/tx`,
            data: txhex,
        });
        return result.data;
    }
    async buildRawTxMempool(toAddress: string, valueBTC: number, fromPrivateKey: string, isSegwit = true) {

        const mempool = new mempoolAPI(this.networkCode)
        const account = await this.parsePrivateKey(fromPrivateKey)
        let fromAddress
        if (isSegwit) {
            fromAddress = account.segwitAddress
        }
        else {
            fromAddress = account.address
        }
        const mempoolData = await mempool.getUTXOS_Fee(fromAddress ? fromAddress : "", !isSegwit)
        const valueSatoshi = valueBTC * 10 ** 8
        const result = await this.buildRawTransaction(
            toAddress,
            valueSatoshi,
            fromAddress ? fromAddress : "",
            account.privateKey ? account.privateKey : "",
            mempoolData.utxos,
            mempoolData.feeVbyte,
            isSegwit)
        console.log(`From:${fromAddress}\nTo:${toAddress}\nValue:${valueBTC}`);
        return result
    }

    async estimateTxSize(inputCount: number, outputCount: number, isSegwit = true, isCompressed = true) {
        if (isSegwit) {
            return inputCount * 68 + outputCount * 34 + 10 + inputCount
        }
        if (isCompressed) {
            return inputCount * 148 + outputCount * 34 + 10 + inputCount
        }

        return inputCount * 180 + outputCount * 34 + 10 + inputCount

    }
    async getInputData(utxo: any, keyPair?: any, isSegwit = true) {
        let inputData: any = {
            hash: utxo.txid,
            index: utxo.vout,
        }
        if (isSegwit) {
            const scriptBuffer = bitcoin.payments.p2wpkh({ pubkey: keyPair.publicKey, network: this.network }).output
            inputData.witnessUtxo = {
                script: scriptBuffer,
                value: utxo.value
            }
            return inputData
        }
        else {
            inputData.nonWitnessUtxo = Buffer.from(utxo.txhex, 'hex')
            return inputData
        }
    }

    async buildRawTransaction(toAddress: string, valueSatoshi: number, changeAddress: string, fromPrivateKey: string, utxos: any[], feeVbyte: number, isSegwit = true) {
        const tx = new bitcoin.Psbt({ network: this.network })
        const keyPair = ECPair.fromPrivateKey(Buffer.from(fromPrivateKey, 'hex'));
        let totalAmountAvailable = 0
        let inputCount = 0;
        let outputCount = 2;
        let transactionSize = 0
        let fee = 0
        for (const utxo of utxos) {
            const inputData = await this.getInputData(utxo, keyPair, isSegwit)
            tx.addInput(inputData)
            totalAmountAvailable += utxo.value;
            inputCount += 1;
            transactionSize = await this.estimateTxSize(inputCount, outputCount, isSegwit)
            fee = transactionSize * feeVbyte
            if (totalAmountAvailable - valueSatoshi - fee > 0) {
                break;
            }
        }
        if (totalAmountAvailable - valueSatoshi - fee < 0) {
            throw new Error("Insufficient Total Balance for this transaction");
        }
        tx.addOutput({
            address: toAddress,
            value: valueSatoshi
        })
        tx.addOutput({
            address: changeAddress,
            value: (totalAmountAvailable - valueSatoshi - fee)
        })
        tx.signAllInputs(keyPair)
        tx.finalizeAllInputs()
        const result = tx.extractTransaction().toHex()
        return result
    }
    async buildSegwitRawTransaction(toAddress: string, valueSatoshi: number, changeAddress: string, fromPrivateKey: string, utxos: any[], feeVbyte: number) {
        const tx = new bitcoin.Psbt({ network: this.network })
        const keyPair = ECPair.fromPrivateKey(Buffer.from(fromPrivateKey, 'hex'));
        let totalAmountAvailable = 0
        let inputCount = 0;
        let outputCount = 2;
        let transactionSize = 0
        let fee = 0
        for (const utxo of utxos) {
            const scriptBuffer = bitcoin.payments.p2wpkh({ pubkey: keyPair.publicKey, network: this.network }).output
            if (scriptBuffer) {
                tx.addInput({
                    hash: utxo.txid,
                    index: utxo.vout,
                    witnessUtxo: {
                        script: scriptBuffer,
                        value: utxo.value
                    },
                });
            }
            totalAmountAvailable += utxo.value;
            inputCount += 1;
            transactionSize = await this.estimateTxSize(inputCount, outputCount)
            fee = transactionSize * feeVbyte
            if (totalAmountAvailable - valueSatoshi - fee > 0) {
                break;
            }
        }
        if (totalAmountAvailable - valueSatoshi - fee < 0) {
            throw new Error("Insufficient Total Balance for this transaction");
        }
        tx.addOutput({
            address: toAddress,
            value: valueSatoshi
        })
        tx.addOutput({
            address: changeAddress,
            value: (totalAmountAvailable - valueSatoshi - fee)
        })
        tx.signAllInputs(keyPair)
        tx.finalizeAllInputs()
        const result = tx.extractTransaction().toHex()
        return result
    }

}
export { mempoolAPI, BitcoinUtils }
export default BitcoinUtils