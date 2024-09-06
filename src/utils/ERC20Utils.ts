
import { ethers } from 'ethers';
import {ethersClientUtils} from './web3EthersUtils'

function retry(fn, retries = 3, delay = 1000) {
    return async function(...args) {
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
export class ERC20Utils extends  ethersClientUtils{

    constructor(NODE_PROVIDER: string , retryConfig={retries:3,delay:1000}) {
        super(NODE_PROVIDER,retryConfig)
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


export const ERC20ABI = [{
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