import Web3 from 'web3'
import { Web3Account } from 'web3-eth-accounts/lib/commonjs/types'
const decimalsMap: any = {
    0: "noether",
    1: "wei",
    1000: "kwei",
    1000000: "mwei",
    1000000000: "gwei",
    1000000000000: "szabo",
    1000000000000000: "milliether",
    1000000000000000000: "ether",
    1000000000000000000000: "kether",
    1000000000000000000000000: "mether",
    1000000000000000000000000000: "gether",
    1000000000000000000000000000000: "tether",
}
const ERC20ABI = [{
    "inputs": [{
        "internalType": "string",
        "name": "name_",
        "type": "string"
    },
    {
        "internalType": "string",
        "name": "symbol_",
        "type": "string"
    }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
},
{
    "anonymous": false,
    "inputs": [{
        "indexed": true,
        "internalType": "address",
        "name": "owner",
        "type": "address"
    },
    {
        "indexed": true,
        "internalType": "address",
        "name": "spender",
        "type": "address"
    },
    {
        "indexed": false,
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
    }
    ],
    "name": "Approval",
    "type": "event"
},
{
    "anonymous": false,
    "inputs": [{
        "indexed": true,
        "internalType": "address",
        "name": "from",
        "type": "address"
    },
    {
        "indexed": true,
        "internalType": "address",
        "name": "to",
        "type": "address"
    },
    {
        "indexed": false,
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
    }
    ],
    "name": "Transfer",
    "type": "event"
},
{
    "inputs": [{
        "internalType": "address",
        "name": "owner",
        "type": "address"
    },
    {
        "internalType": "address",
        "name": "spender",
        "type": "address"
    }
    ],
    "name": "allowance",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
},
{
    "inputs": [{
        "internalType": "address",
        "name": "spender",
        "type": "address"
    },
    {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
    }
    ],
    "name": "approve",
    "outputs": [{
        "internalType": "bool",
        "name": "",
        "type": "bool"
    }],
    "stateMutability": "nonpayable",
    "type": "function"
},
{
    "inputs": [{
        "internalType": "address",
        "name": "account",
        "type": "address"
    }],
    "name": "balanceOf",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
},
{
    "inputs": [],
    "name": "decimals",
    "outputs": [{
        "internalType": "uint8",
        "name": "",
        "type": "uint8"
    }],
    "stateMutability": "view",
    "type": "function"
},
{
    "inputs": [{
        "internalType": "address",
        "name": "spender",
        "type": "address"
    },
    {
        "internalType": "uint256",
        "name": "subtractedValue",
        "type": "uint256"
    }
    ],
    "name": "decreaseAllowance",
    "outputs": [{
        "internalType": "bool",
        "name": "",
        "type": "bool"
    }],
    "stateMutability": "nonpayable",
    "type": "function"
},
{
    "inputs": [{
        "internalType": "address",
        "name": "spender",
        "type": "address"
    },
    {
        "internalType": "uint256",
        "name": "addedValue",
        "type": "uint256"
    }
    ],
    "name": "increaseAllowance",
    "outputs": [{
        "internalType": "bool",
        "name": "",
        "type": "bool"
    }],
    "stateMutability": "nonpayable",
    "type": "function"
},
{
    "inputs": [],
    "name": "name",
    "outputs": [{
        "internalType": "string",
        "name": "",
        "type": "string"
    }],
    "stateMutability": "view",
    "type": "function"
},
{
    "inputs": [],
    "name": "symbol",
    "outputs": [{
        "internalType": "string",
        "name": "",
        "type": "string"
    }],
    "stateMutability": "view",
    "type": "function"
},
{
    "inputs": [],
    "name": "totalSupply",
    "outputs": [{
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
},
{
    "inputs": [{
        "internalType": "address",
        "name": "to",
        "type": "address"
    },
    {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
    }
    ],
    "name": "transfer",
    "outputs": [{
        "internalType": "bool",
        "name": "",
        "type": "bool"
    }],
    "stateMutability": "nonpayable",
    "type": "function"
},
{
    "inputs": [{
        "internalType": "address",
        "name": "from",
        "type": "address"
    },
    {
        "internalType": "address",
        "name": "to",
        "type": "address"
    },
    {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
    }
    ],
    "name": "transferFrom",
    "outputs": [{
        "internalType": "bool",
        "name": "",
        "type": "bool"
    }],
    "stateMutability": "nonpayable",
    "type": "function"
}
]


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
        const contract = new this.web3.eth.Contract(contractAbi, contractAddress)
        return contract
    }
    async nativeTransfer(toAddress: string, valueEther: number, hexPrivateKey: string) {
        const account = this.web3.eth.accounts.privateKeyToAccount(hexPrivateKey.startsWith("0x") ? hexPrivateKey : '0x' + hexPrivateKey)
        const chainId = await this.web3.eth.getChainId()
        const value = Web3.utils.toWei(valueEther, "ether")
        const gasPrice = await this.web3.eth.getGasPrice()
        const nonce = await this.web3.eth.getTransactionCount(account.address)
        const transactionMessage = {
            from: account.address,
            to: toAddress,
            chainId: Number(chainId),
            value: value,
            gas: 2000000,
            gasPrice: Number(gasPrice),
            nonce: Number(nonce),
        }
        const transactionGasEstimate = {
            from: account.address,
            to: toAddress,
            value: value,
        }
        const gas = await this.web3.eth.estimateGas(transactionGasEstimate)
        transactionMessage.gas = Number(gas)

        const transaction = await account.signTransaction(transactionMessage)
        return this.web3.eth.sendSignedTransaction(transaction.rawTransaction)

    }
    async sendTransaction(message: TransactionMessage, account: Web3Account) {
        const transaction = await account.signTransaction(message)
        return this.web3.eth.sendSignedTransaction(transaction.rawTransaction)
    }

    async excuteReadFunction(contractAbi: any[], contractAddress: string, fnName: string, ...fnArgs: string[]) {
        const ct = await this.createCT(contractAbi, contractAddress)
        const result = await eval("ct.methods." + fnName)(...fnArgs).call()
        return result
    }
    async excuteWriteFunction(contractAbi: any[], contractAddress: string, fnName: string, hexPrivateKey: string, ...fnArgs: string[]) {
        const ct = await this.createCT(contractAbi, contractAddress)
        const account = this.web3.eth.accounts.privateKeyToAccount(hexPrivateKey.startsWith("0x") ? hexPrivateKey : '0x' + hexPrivateKey)
        const chainId = await this.web3.eth.getChainId()
        const gasPrice = await this.web3.eth.getGasPrice()
        const nonce = await this.web3.eth.getTransactionCount(account.address)
        const encodeData = await eval("ct.methods." + fnName)(...fnArgs).encodeABI();
        const transactionMessage: TransactionMessage = {
            from: account.address,
            to: contractAddress,
            gas: 2000000,
            gasPrice: Number(gasPrice),
            data: encodeData.startsWith('0x') ? encodeData : '0x' + encodeData,
            nonce: Number(nonce),
            chainId: Number(chainId)
        }
        const transactionGasEstimate = {
            from: account.address,
            to: contractAddress,
            data: encodeData.startsWith('0x') ? encodeData : '0x' + encodeData,
        }
        const gas = await this.web3.eth.estimateGas(transactionGasEstimate)
        transactionMessage.gas = Number(gas)
        // console.log(transactionMessage);
        const result = this.sendTransaction(transactionMessage, account)
        return result
    }
    async ERC20TokenDecimals(contractAddress: string) {
        const ct = await this.createCT(ERC20ABI, contractAddress)
        const result = await ct.methods.decimals().call()
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
    async ERC20TokenTransfer(toAddress: string, valueEther: number, contractAddress: string, hexPrivateKey: string) {
        const decimals = await this.ERC20TokenDecimals(contractAddress)
        const valueWei = Web3.utils.toWei(valueEther, decimalsMap[(10 ** Number(decimals))])
        const result = await this.excuteWriteFunction(ERC20ABI, contractAddress, "transfer", hexPrivateKey, toAddress, valueWei)
        return result
    }



}
export default Web3ClientUtils
