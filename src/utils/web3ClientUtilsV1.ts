import Web3 from 'web3/dist/web3.min.js'
import {
    ethNet,
    decimalsMap,
    ERC20ABI
} from './ethereumNetWork'

type TransactionMessage = {
    from: string,
    to: string,
    gas: number,
    gasPrice: number,
    data: string,
    nonce: number,
    chainId: number
}

class Web3ClientUtils {
    web3: Web3
    constructor(NODE_PROVIDER: string) {
        this.web3 = new Web3(NODE_PROVIDER)

    }

    async newAccount() {
        const account = this.web3.eth.accounts.create()
        return account
    }
    async createCT(contractAbi: Array<any>, contractAddress: string) {
        try {
            const contract = new this.web3.eth.Contract(contractAbi, contractAddress)
            return contract
        } catch (err) {
            console.log(err);
        }
    }
    async sendTransaction(message: TransactionMessage, account) {
        const transaction = await account.signTransaction(message)
        return this.web3.eth.sendSignedTransaction(transaction.rawTransaction)
    }
    async excuteReadFunction(contractAbi, contractAddress, fnName, ...fnArgs) {
        const ct = await this.createCT(contractAbi, contractAddress)
        const result = await eval("ct.methods." + fnName)(...fnArgs).call()
        return result
    }
    async excuteWriteFunction(contractAbi, contractAddress, fnName, hexPrivateKey, ...fnArgs) {
        const ct = await this.createCT(contractAbi, contractAddress)
        const account = this.web3.eth.accounts.privateKeyToAccount(hexPrivateKey)
        const chainId = await this.web3.eth.getChainId()
        const gasPrice = await this.web3.eth.getGasPrice()
        const nonce = await this.web3.eth.getTransactionCount(account.address)
        const encodeData = await eval("ct.methods." + fnName)(...fnArgs).encodeABI();
        const transactionMessage: TransactionMessage = {
            from: account.address,
            to: contractAddress,
            gas: 2000000,
            gasPrice: gasPrice,
            data: encodeData.startsWith('0x') ? encodeData : '0x' + encodeData,
            nonce: nonce,
            chainId: chainId
        }
        const transactionGasEstimate = {
            from: account.address,
            to: contractAddress,
            data: encodeData.startsWith('0x') ? encodeData : '0x' + encodeData,
        }
        const gas = await this.web3.eth.estimateGas(transactionGasEstimate)
        transactionMessage.gas = gas
        // console.log(transactionMessage);
        const result = this.sendTransaction(transactionMessage, account)
        return result
    }
    async ERC20TokenDecimals(contractAddress) {
        const ct = await this.createCT(ERC20ABI, contractAddress)
        const result = await ct.methods.decimals().call()
        return result
    }
    async ERC20TokenTotalSuply(contractAddress) {
        const ct = await this.createCT(ERC20ABI, contractAddress)
        const decimals = await ct.methods.decimals().call()
        const ts = await ct.methods.totalSupply().call()
        const valueEther = Web3.utils.fromWei(ts, decimalsMap[(10 ** decimals)])
        return valueEther
    }
    async ERC20BalanceOfToken(address, contractAddress) {
        const ct = await this.createCT(ERC20ABI, contractAddress)
        const decimals = await ct.methods.decimals().call()
        const valueWei = await ct.methods.balanceOf(address).call()
        const valueEther = Web3.utils.fromWei(valueWei, decimalsMap[(10 ** decimals)])
        return valueEther
    }
    async ERC20TokenTransfer(toAddress, valueEther, contractAddress, hexPrivateKey) {
        const decimals = await this.ERC20TokenDecimals(contractAddress)
        const valueWei = Web3.utils.toWei(valueEther, decimalsMap[(10 ** decimals)])
        const result = await this.excuteWriteFunction(ERC20ABI, contractAddress, "transfer", hexPrivateKey, toAddress, valueWei)
        return result
    }



}
export {
    Web3ClientUtils
}