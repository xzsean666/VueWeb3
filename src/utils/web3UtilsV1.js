import Web3 from 'web3/dist/web3.min.js'
import abi from './abi'
import ethNet from './ethereumNetWork'

const NODE_PROVIDER_PSC = "https://seed0.PolySmartChain.com"
// let Web3 = window.Web3;
async function createWeb3() {
    if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
        return web3
    } else if (window.web3) {
        const web3 = new Web3(window.web3.currentProvider);
        return web3
    } else {
        console.log(
            "Non-Ethereum browser detected. You should consider trying MetaMask!"
        );
        const web3 = new Web3(NODE_PROVIDER_PSC);
        return web3
    }
}

async function createCT(contractAddress, contractAbi) {
    const web3 = await createWeb3()
    try {
        const contract = new web3.eth.Contract(contractAbi, contractAddress)
        return contract
    } catch (err) {
        console.log(err);
    }
}
async function createCTFrom_NODE_PROVIDER(NODE_PROVIDER, contractAddress, contractAbi) {
    const web3 = new Web3(NODE_PROVIDER);
    try {
        const contract = new web3.eth.Contract(contractAbi, contractAddress)
        return contract
    } catch (err) {
        console.log(err);
    }
}
async function changeNetWork(chainId) {

    if (window.ethereum.networkVersion !== chainId) {
        try {
            await window.ethereum.request({
                method: 'wallet_switchEthereumChain',
                params: [{
                    chainId: Web3.utils.toHex(chainId)
                }]
            });
        } catch (err) {
            // This error code indicates that the chain has not been added to MetaMask
            if (err.code === 4902) {
                await window.ethereum.request({
                    method: 'wallet_addEthereumChain',
                    params: [ethNet.ethNet[chainId]["NETWORK"]]
                });
            }
        }
    }
}
async function addCostomTokenByChainID(chainId) {
    await changeNetWork(chainId)
    ethNet.ethNet[chainId]["TOKENS"].forEach(e => {
        addToken(e)
    });

}
async function addToken(tokenParams) {
    window.ethereum
        .request({
            method: 'wallet_watchAsset',
            params: tokenParams,
        })
        .then((success) => {
            if (success) {
                console.log(tokenParams["options"]["symbol"] + 'successfully added to wallet!');
            } else {
                throw new Error('Something went wrong.');
            }
        })
        .catch(console.error);
}

function modify_receipt(receipt) {
    let result = {}
    result["chainId"] = Web3.utils.hexToNumber(window.ethereum.chainId)
    result["transactionHash"] = receipt.transactionHash
    result["from"] = receipt.events.Transfer.returnValues.from
    result["to"] = receipt.events.Transfer.returnValues.to
    result["value_ether"] = Web3.utils.fromWei(receipt.events.Transfer.returnValues.value, "ether")
    result["date"] = new Date()
    // console.log(result);
    return result
}
async function nativeTransfer(toAddress, valueEther) {
    const web3 = await createWeb3()
    let fromAddress = await getAccounts()
    let res = await web3.eth.sendTransaction({
        from: fromAddress[0],
        to: toAddress,
        value: etherToWei(valueEther),
    }).on('receipt', (receipt) => {
        return receipt
    })
    return res
}
async function excuteReadFunctionFrom_NODE_PROVIDER(NODE_PROVIDER, contractAddress, contractAbi, fnName, ...fnArgs) {
    const ct = await createCTFrom_NODE_PROVIDER(NODE_PROVIDER, contractAddress, contractAbi)
    let res = await eval("ct.methods." + fnName)(...fnArgs).call()
    return res
}
async function getBalanceOfNative(NODE_PROVIDER, address) {
    const web3 = new Web3(NODE_PROVIDER)
    let balance = await web3.eth.getBalance(address)
    return web3.utils.fromWei(balance, "ether")
}
async function getBalanceOfToken(NODE_PROVIDER, contractAddress, address) {
    const decimals = excuteReadFunctionFrom_NODE_PROVIDER(NODE_PROVIDER, contractAddress, ERC20ABI, "decimals")
    const balance = excuteReadFunctionFrom_NODE_PROVIDER(NODE_PROVIDER, contractAddress, ERC20ABI, "balanceOf", address)
    const result = await Promise.all([balance, decimals])
    // console.log(result);
    return (result[0] / 10 ** result[1])
}
async function excuteReadFunction(contractAddress, contractAbi, fnName, ...fnArgs) {
    const ct = await createCT(contractAddress, contractAbi)
    let res = await eval("ct.methods." + fnName)(...fnArgs).call()
    return res
}
async function excuteWriteFunction(contractAddress, contractAbi, fnName, ...fnArgs) {
    const ct = await createCT(contractAddress, contractAbi)
    let fromAddress = await getAccounts()
    console.log(fromAddress);
    let res = await eval("ct.methods." + fnName)(...fnArgs).send({
        'from': fromAddress[0]
    }).on('receipt', (receipt) => {
        return receipt
    })
    // console.log(res);
    return res
}
async function tokenTransfer(contractAddress, toAddress, valueEther) {
    let decimals = await excuteReadFunction(contractAddress, ERC20ABI, "decimals")
    // console.log(decimalsMap[(10 ** decimals)]);
    // let valueWei = Web3.utils.toBN(valueEther * 10 ** decimals).toString(); 大于20位的数不能使用
    // let valueWei = Web3.utils.toBN(valueEther).mul(Web3.utils.toBN((10 ** decimals))).toString(); 带小数的不能使用
    // let valueWei = (valueEther * (Web3.utils.toBN((10 ** decimals)))).toString(); 
    // let valueWei = "0x" + (valueEther * 10 ** decimals).toString(16); 精度会有偏差
    let valueWei = Web3.utils.toWei(valueEther, decimalsMap[(10 ** decimals)])


    console.log(valueWei);
    let result = await excuteWriteFunction(contractAddress, ERC20ABI, "transfer", toAddress, valueWei)
    return result
}

async function getAccounts() {
    const web3 = await createWeb3()
    return web3.eth.getAccounts()
}

function weiToEther(wei) {
    return Web3.utils.fromWei(wei, "ether")
}

function etherToWei(ether) {
    return Web3.utils.toWei(ether, "ether")
}

async function getPscChainTotalSuply(contractAddress) {
    const ct = await createCT(NODE_PROVIDER_PSC, contractAddress)
    let ts = await ct.methods.totalSupply().call()
    ts = Web3.utils.fromWei(ts, "ether")
    return ts
}
async function getPscChainBalanceOfToken(address, contractAddress) {
    const ct = await createCT(NODE_PROVIDER_PSC, contractAddress)
    let res = await ct.methods.balanceOf(address).call()
    res = Web3.utils.fromWei(res, "ether")
    return res
}
async function pscTokenTransfer(toAddress, valueEther, contractAddress) {
    let res = await excuteWriteFunction(NODE_PROVIDER_PSC, contractAddress, abi.contract_abi["ERC20"], "transfer", toAddress, etherToWei(valueEther))
    return modify_receipt(res)
}

// contract.methods.totalSupply().call((err, result) => { console.log( web3.utils.fromWei(result, 'ether')) })
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
export default {
    NODE_PROVIDER_PSC,
    excuteReadFunction,
    getPscChainTotalSuply,
    getPscChainBalanceOfToken,
    weiToEther,
    etherToWei,
    getAccounts,
    excuteWriteFunction,
    pscTokenTransfer,
    nativeTransfer,
    changeNetWork,
    excuteReadFunctionFrom_NODE_PROVIDER,
    getBalanceOfNative,
    getBalanceOfToken,
    tokenTransfer,
    addCostomTokenByChainID,
    addToken
}