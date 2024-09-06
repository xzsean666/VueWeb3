import { ethers } from 'ethers';

function retry(fn:any, retries = 3, delay = 1000) {
    return async function(...args:any) {
        let attempts = 0;
        while (attempts < retries) {
            try {
                return await fn(...args);
            } catch (error) {
                attempts++;
                if (attempts >= retries) {
                    throw error;
                }
                await new Promise(resolve => setTimeout(resolve, delay));
            }
        }
    };
}
export class ethersClientUtils {
    web3: ethers.JsonRpcProvider;
    NODE_PROVIDER: string;
    retryConfig:any;
    constructor(NODE_PROVIDER: string , retryConfig={retries:3,delay:1000}) {
        this.web3 = new ethers.JsonRpcProvider(NODE_PROVIDER)
        this.NODE_PROVIDER = NODE_PROVIDER
        this.retryConfig =  retryConfig
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
    async excuteReadFunction(contractAbi: any[], contractAddress: string, fnName: string, ...fnArgs:any) {
        const ct = await this.createContract(contractAbi, contractAddress)
        const result = await eval("ct." + fnName)(...fnArgs)
        return result
    }
    async excuteReadFunctionWithRetry(contractAbi: any[], contractAddress: string, fnName: string, ...fnArgs: any[]) {
        const fn = retry(this.excuteReadFunction,this.retryConfig.retries,this.retryConfig.delay)
        const result = await fn(contractAbi, contractAddress, fnName, ...fnArgs)
        return result
    }
    async excuteWriteFunction(contractAbi: any[], contractAddress: string, fnName: string, hexPrivateKey: string, ...fnArgs: any[]) {
        const ct = await this.createConectedContract(contractAbi, contractAddress, hexPrivateKey)
        const tx = await eval("ct." + fnName)(...fnArgs)
        return tx
    }
    async excuteWriteFunctionWithRetry(contractAbi: any[], contractAddress: string, fnName: string, ...fnArgs: any[]) {
        const fn = retry(this.excuteWriteFunction,this.retryConfig.retries,this.retryConfig.delay)
        const result = await fn(contractAbi, contractAddress, fnName, ...fnArgs)
        return result
    }
}


export default ethersClientUtils