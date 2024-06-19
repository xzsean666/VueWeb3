
import { PrivateKey, Transaction, Script, Address } from "bitcore-lib";
import { livenet, testnet } from "bitcore-lib/lib/networks";
import Mnemonic from "bitcore-mnemonic";
import mempoolJS from "@mempool/mempool.js";
import { MempoolReturn } from "@mempool/mempool.js/lib/interfaces/index";
import axios from "axios";

type addressFn =
    "getAddress" |
    "getAddressTxs" |
    "getAddressTxsChain" |
    "getAddressTxsMempool" |
    "getAddressTxsUtxo"
type transactionsFn =
    "getTx" |
    "getTxHex" |
    "getTxMerkleBlockProof" |
    "getTxMerkleProof" |
    "getTxOutspend" |
    "getTxOutspends" |
    "getTxRaw" |
    "getTxStatus"

class btcUtils {
    network: any;
    baseUrlBS: string;
    mempool: MempoolReturn;
    constructor(network = "mainnet") {
        if (network == "mainnet") {
            this.network = livenet
            this.baseUrlBS = "https://blockstream.info/api/"
            this.mempool = mempoolJS({
                hostname: 'mempool.space',
                network: 'mainnet'
            });
        }
        else {
            this.network = testnet
            this.baseUrlBS = "https://blockstream.info/testnet/api/"
            this.mempool = mempoolJS({
                hostname: 'mempool.space',
                network: 'testnet'
            });
        }
    }
    async createWallet() {
        const privateKey = new PrivateKey(this.network);
        const address = privateKey.toAddress();
        return {
            privateKey: privateKey.toString(),
            address: address.toString(),
        };
    }
    async createHDWallet() {
        let passPhrase = new Mnemonic(Mnemonic.Words.ENGLISH);
        let xpriv = passPhrase.toHDPrivateKey(passPhrase.toString(), this.network);

        return {
            xpub: xpriv.xpubkey,
            xpriv: xpriv.xprivkey,
            privateKey: xpriv.privateKey.toString(),
            address: xpriv.publicKey.toAddress().toString(),
            mnemonic: passPhrase.toString(),
        };
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
    async buildTransaction(toAddress: string, value: number, fromAddress: string, fromPK: string) {
        // in*148 + out*34 + 10 plus or minus 'in'
        const utxos = this.getAddress(fromAddress, "getAddressTxsUtxo")
        const recommendedFee = this.getFeesRecommended()
        const ur = await Promise.all([utxos, recommendedFee])
        // console.log(ur);
        const valueSatoshi = value * 100000000;
        const fromAddressOBJ = new Address(fromAddress)
        let inputs = []
        let totalAmountAvailable = 0
        let inputCount = 0;
        let outputCount = 2;
        let transactionSize = 0
        let fee = 0
        for (const utxo of ur[0]) {
            let input: any = {};
            input.satoshis = utxo.value;
            input.script = Script.buildPublicKeyHashOut(fromAddressOBJ).toHex();
            input.address = fromAddress;
            input.txId = utxo.txid;
            input.outputIndex = utxo.vout;
            totalAmountAvailable += utxo.value;
            inputCount += 1;
            inputs.push(input);
            transactionSize =
                inputCount * 148 + outputCount * 34 + 10 - inputCount;
            fee = transactionSize * ur[1].hourFee
            if (totalAmountAvailable - valueSatoshi - fee > 0) {
                break;
            }
        }
        // min relay fee not met
        // transactionSize =
        //     inputCount * 148 + outputCount * 34 + 10 - inputCount;
        transactionSize =
            inputCount * 148 + outputCount * 34 + 10;
        fee = transactionSize * ur[1].hourFee
        if (totalAmountAvailable - valueSatoshi - fee < 0) {
            throw new Error("Balance is too low for this transaction");
        }
        const transaction = new Transaction();
        //Set transaction input
        transaction.from(inputs);
        // set the recieving address and the amount to send
        transaction.to(toAddress, valueSatoshi);
        // Set change address - Address to receive the left over funds after transfer
        transaction.change(fromAddress);
        //manually set transaction fees
        transaction.fee(Math.round(fee));
        // Sign transaction with your private key
        transaction.sign(fromPK);
        // serialize Transactions
        // console.log(transaction);
        // console.log(transaction);

        const serializedTransaction = transaction.serialize();
        return serializedTransaction
    }
    async sendBitcoin(toAddress: string, value: number, fromAddress: string, fromPK: string) {
        const txhex = await this.buildTransaction(toAddress, value, fromAddress, fromPK)
        // CORS error
        // const result = await this.sendTransaction(txhex)

        const result = await axios({
            method: "POST",
            url: `https://blockstream.info/testnet/api/tx`,
            data: txhex,
        });
        return result.data;
        // return result
    }
}


export default btcUtils