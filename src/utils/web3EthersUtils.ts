import { ethers } from 'ethers';
import { ERC20ABI } from "./web3CommonData";
// import { HDPrivateKey } from 'bitcore-lib';

class ethersClientUtils {
    web3: ethers.JsonRpcProvider;
    NODE_PROVIDER: string;
    constructor(NODE_PROVIDER: string) {
        this.web3 = new ethers.JsonRpcProvider(NODE_PROVIDER)
        this.NODE_PROVIDER = NODE_PROVIDER
        // this.web3._getConnection().timeout = 12000
    }
    async getLatestBlock() {
        const result = this.web3.getBlockNumber()
        return result
    }
    async latencyOfRPC() {
        const startTime = new Date().getTime()
        const currentBlockNumber = await this.getLatestBlock()
        const endTime = new Date().getTime()
        const result = {
            rpcURL: this.NODE_PROVIDER,
            currentBlockNumber: currentBlockNumber,
            latency: endTime - startTime
        }
        return result
    }

    async createContract(abi: any[], contractAddress: string) {
        const CT = new ethers.Contract(contractAddress, abi, this.web3)
        return CT
    }
    async createConectedContract(abi: any[], contractAddress: string, hexPrivateKey: string | ethers.SigningKey) {
        const CT = new ethers.Contract(contractAddress, abi, this.web3)
        const wallet = new ethers.Wallet(hexPrivateKey, this.web3)
        const conectedContract = CT.connect(wallet)
        return conectedContract
    }
    async newAccount() {
        const mnemonicHD = ethers.Wallet.createRandom().mnemonic
        if (mnemonicHD) {
            const walletHD = ethers.HDNodeWallet.fromMnemonic(mnemonicHD)
            return walletHD
        }
    }
    async createWallet(hexPrivateKey: string | ethers.SigningKey) {
        return new ethers.Wallet(hexPrivateKey, this.web3)
    }
    async phraseWalletMnemonic(mnemonic: string) {
        const wallet = ethers.Wallet.fromPhrase(mnemonic)
        const result = {
            address: wallet.address,
            pk: wallet.privateKey,
            mnemonic: wallet.mnemonic
        }
        return result
    }
    async phraseWallet(hexPrivateKey: string) {
        // | ethers.SigningKey
        // return new ethers.Wallet(hexPrivateKey)
        const wallet = new ethers.Wallet(hexPrivateKey)
        const result = {
            address: wallet.address,
            pk: wallet.privateKey
        }
        return result
    }
    async nativeTransfer(toAddress: string, valueEther: string, hexPrivateKey: string | ethers.SigningKey) {
        const wallet = await this.createWallet(hexPrivateKey)
        const message = {
            to: toAddress,
            value: ethers.parseEther(valueEther)
        }
        const tx = await wallet.sendTransaction(message)
        // await tx.wait()
        return tx
    }
    async excuteReadFunction(contractAbi: any[], contractAddress: string, fnName: string, ...fnArgs: any[]) {
        const ct = await this.createContract(contractAbi, contractAddress)
        const result = await eval("ct." + fnName)(...fnArgs)
        return result
    }
    async excuteWriteFunction(contractAbi: any[], contractAddress: string, fnName: string, hexPrivateKey: string, ...fnArgs: any[]) {
        const ct = await this.createConectedContract(contractAbi, contractAddress, hexPrivateKey)
        const tx = await eval("ct." + fnName)(...fnArgs)
        // console.log(tx);

        // await tx.wait()
        return tx
    }
    async ERC20TokenDecimals(contractAddress: string) {
        const ct = await this.createContract(ERC20ABI, contractAddress)
        const result = await ct.decimals()
        return result
    }
    async ERC20TokenTotalSuply(contractAddress: string) {
        const result = this.excuteReadFunction(ERC20ABI, contractAddress, 'totalSupply')
        return result
    }
    async ERC20BalanceOfToken(address: string, contractAddress: string) {
        const result = this.excuteReadFunction(ERC20ABI, contractAddress, 'balanceOf', address)
        return result
    }
    async ERC20EtherBalanceOfToken(address: string, contractAddress: string) {
        const decimals = this.ERC20TokenDecimals(contractAddress)
        const balanceOfWei = this.excuteReadFunction(ERC20ABI, contractAddress, 'balanceOf', address)
        const result = await Promise.all([decimals, balanceOfWei])
        const balanceOfEther = Number(result[1]) / 10 ** Number(result[0])
        return balanceOfEther
    }
    async ERC20TokenTransfer(toAddress: string, valueEther: string, contractAddress: string, hexPrivateKey: string) {
        const decimals = await this.ERC20TokenDecimals(contractAddress)
        const valueWei = ethers.parseUnits(valueEther, Number(decimals))
        const result = await this.excuteWriteFunction(ERC20ABI, contractAddress, "transfer", hexPrivateKey, toAddress, valueWei)
        return result
    }

}

export default ethersClientUtils