import Web3 from "web3"
const ethNet = {
    "56": {
        "NETWORK": {
            chainName: 'Binance Smart Chain Mainnet',
            chainId: Web3.utils.toHex(56),
            nativeCurrency: {
                name: 'BNB',
                decimals: 18,
                symbol: 'BNB'
            },
            rpcUrls: ['https://bsc-dataseed1.binance.org'],
            blockExplorerUrls: ['https://bscscan.com']
        }
    },
    "97": {
        "NETWORK": {
            chainName: 'Binance Smart Chain Testnet',
            chainId: Web3.utils.toHex(97),
            nativeCurrency: {
                name: 'tBNB',
                decimals: 18,
                symbol: 'tBNB'
            },
            rpcUrls: ['https://bsc-testnet.public.blastapi.io'],
            blockExplorerUrls: ['https://testnet.bscscan.com']
        }
    },
    "137": {
        "NETWORK": {
            chainName: 'Polygon Mainnet',
            chainId: Web3.utils.toHex(137),
            nativeCurrency: {
                name: 'MATIC',
                decimals: 18,
                symbol: 'MATIC'
            },
            rpcUrls: ['https://polygon-rpc.com/'],
            blockExplorerUrls: ['https://polygonscan.com']
        }
    },
    "6999": {
        "NETWORK": {
            chainName: 'Poly Smart Chain Mainnet',
            chainId: Web3.utils.toHex(6999),
            nativeCurrency: {
                name: 'PSC',
                decimals: 18,
                symbol: 'PSC'
            },
            rpcUrls: ['https://seed0.PolySmartChain.com'],
            blockExplorerUrls: ['https://scan.polysmartchain.com/']
        },
        "TOKENS": [{
                "type": 'ERC20',
                "options": {
                    "address": '0xb0D0322C362A847131d5e28De0b8A39DE30745dc',
                    "symbol": 'ST',
                    "decimals": 18,
                    "image": 'https://polygonscan.com/token/images/tether_32.png',
                },
            }, {
                "type": 'ERC20',
                "options": {
                    "address": '0x9a00EbF48666227e87bf2E1951823666CD3D474e',
                    "symbol": 'USDT',
                    "decimals": 18,
                    "image": 'https://polygonscan.com/token/images/tether_32.png',
                },
            },

        ]
    },
    "80001": {
        "NETWORK": {
            chainName: 'Polygon Mumbai',
            chainId: Web3.utils.toHex(80001),
            nativeCurrency: {
                name: 'MATIC',
                decimals: 18,
                symbol: 'MATIC'
            },
            rpcUrls: ['https://matic-mumbai.chainstacklabs.com'],
            blockExplorerUrls: ['https://mumbai.polygonscan.com']
        }
    },
}
const decimalsMap = {
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
export {
    ethNet,
    decimalsMap,
    ERC20ABI
}