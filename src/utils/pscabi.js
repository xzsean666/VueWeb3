const contract_abi = {
    "0x04E31a359403eA281AA40408DFdDCa9fe77d6DC6": [{
            "inputs": [{
                    "internalType": "address",
                    "name": "wdcImpl",
                    "type": "address"
                },
                {
                    "internalType": "address payable",
                    "name": "ownerAddr",
                    "type": "address",
                },
                {
                    "internalType": "address payable",
                    "name": "contAdmin",
                    "type": "address",
                },
                {
                    "internalType": "address",
                    "name": "wdcProxyAdminAddr",
                    "type": "address",
                },
            ],
            "stateMutability": "nonpayable",
            "type": "constructor",
        },
        {
            "anonymous": false,
            "inputs": [{
                    "indexed": true,
                    "internalType": "string",
                    "name": "ethTxHash",
                    "type": "string",
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "wdcAddr",
                    "type": "address",
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "toAddress",
                    "type": "address",
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256",
                },
            ],
            "name": "RefundERC20",
            "type": "event",
        },
        {
            "anonymous": false,
            "inputs": [{
                    "indexed": true,
                    "internalType": "address",
                    "name": "ercAddr",
                    "type": "address",
                },
                {
                    "indexed": true,
                    "internalType": "string",
                    "name": "bscTxHash",
                    "type": "string",
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "toAddress",
                    "type": "address",
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256",
                },
            ],
            "name": "SwapFilled",
            "type": "event",
        },
        {
            "anonymous": false,
            "inputs": [{
                    "indexed": true,
                    "internalType": "address",
                    "name": "erc20Addr",
                    "type": "address",
                },
                {
                    "indexed": true,
                    "internalType": "string",
                    "name": "wdcAddr",
                    "type": "string",
                },
                {
                    "indexed": false,
                    "internalType": "string",
                    "name": "symbol",
                    "type": "string",
                },
                {
                    "indexed": false,
                    "internalType": "string",
                    "name": "name",
                    "type": "string",
                },
                {
                    "indexed": false,
                    "internalType": "uint8",
                    "name": "decimals",
                    "type": "uint8",
                },
            ],
            "name": "SwapPairCreated",
            "type": "event",
        },
        {
            "anonymous": false,
            "inputs": [{
                    "indexed": true,
                    "internalType": "address",
                    "name": "ercAddr",
                    "type": "address",
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "fromAddr",
                    "type": "address",
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256",
                },
            ],
            "name": "SwapStarted",
            "type": "event",
        },
        {
            "anonymous": false,
            "inputs": [{
                    "indexed": true,
                    "internalType": "address",
                    "name": "fromAddr",
                    "type": "address",
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256",
                },
            ],
            "name": "SwapStartedEth",
            "type": "event",
        },
        {
            "anonymous": false,
            "inputs": [{
                    "indexed": true,
                    "internalType": "address",
                    "name": "erc20Addr",
                    "type": "address",
                },
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256",
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "addr",
                    "type": "address",
                },
            ],
            "name": "Withdrawed",
            "type": "event",
        },
        {
            "inputs": [{
                    "internalType": "string",
                    "name": "wdcAddr",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "name",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "symbol",
                    "type": "string"
                },
                {
                    "internalType": "uint8",
                    "name": "decimals",
                    "type": "uint8"
                },
            ],
            "name": "createSwapPairto20",
            "outputs": [{
                "internalType": "address",
                "name": "",
                "type": "address"
            }],
            "stateMutability": "nonpayable",
            "type": "function",
        },
        {
            "inputs": [{
                    "internalType": "string",
                    "name": "wdcTxHash",
                    "type": "string"
                },
                {
                    "internalType": "address",
                    "name": "ercAddr",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "toAddress",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                },
            ],
            "name": "fillWDC2ETHSwap",
            "outputs": [{
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }],
            "stateMutability": "nonpayable",
            "type": "function",
        },
        {
            "inputs": [{
                    "internalType": "string",
                    "name": "wdcTxHash",
                    "type": "string"
                },
                {
                    "internalType": "address",
                    "name": "ercAddr",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "toAddress",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                },
            ],
            "name": "forgeWDC2ETHSwap",
            "outputs": [{
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }],
            "stateMutability": "nonpayable",
            "type": "function",
        },
        {
            "inputs": [{
                    "internalType": "string",
                    "name": "ethTxHash",
                    "type": "string"
                },
                {
                    "internalType": "address",
                    "name": "ercAddr",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "toAddress",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                },
                {
                    "internalType": "uint64",
                    "name": "orderId",
                    "type": "uint64"
                },
            ],
            "name": "refunedERC20",
            "outputs": [{
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }],
            "stateMutability": "nonpayable",
            "type": "function",
        },
        {
            "inputs": [{
                    "internalType": "address",
                    "name": "ercAddr",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                },
            ],
            "name": "swapETH2WDC",
            "outputs": [{
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }],
            "stateMutability": "nonpayable",
            "type": "function",
        },
        {
            "inputs": [{
                    "internalType": "uint64",
                    "name": "orderId",
                    "type": "uint64"
                },
                {
                    "internalType": "string",
                    "name": "txHash",
                    "type": "string"
                },
            ],
            "name": "setSwapTx",
            "outputs": [{
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }],
            "stateMutability": "nonpayable",
            "type": "function",
        },
        {
            "inputs": [{
                "internalType": "address payable",
                "name": "admins",
                "type": "address"
            }],
            "name": "setContractAdmin",
            "outputs": [{
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }],
            "stateMutability": "nonpayable",
            "type": "function",
        },
        {
            "inputs": [],
            "name": "setLock",
            "outputs": [{
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }],
            "stateMutability": "nonpayable",
            "type": "function",
        },
        {
            "inputs": [],
            "name": "setUnLock",
            "outputs": [{
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }],
            "stateMutability": "nonpayable",
            "type": "function",
        },
        {
            "inputs": [{
                    "internalType": "address",
                    "name": "tokenAddr",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                },
            ],
            "name": "withdraw",
            "outputs": [{
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }],
            "stateMutability": "nonpayable",
            "type": "function",
        },
        {
            "inputs": [],
            "name": "getAdminContractAddr",
            "outputs": [{
                "internalType": "address",
                "name": "",
                "type": "address"
            }],
            "stateMutability": "view",
            "type": "function",
        },
    ],
    "0x39E7DFFFD88f704Fd33aEAd4D457AD67b9d3F4c3": [{
            "inputs": [{
                    "internalType": "address",
                    "name": "_factory",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "_WETH",
                    "type": "address"
                },
            ],
            "stateMutability": "nonpayable",
            "type": "constructor",
        },
        {
            "inputs": [],
            "name": "WETH",
            "outputs": [{
                "internalType": "address",
                "name": "",
                "type": "address"
            }],
            "stateMutability": "view",
            "type": "function",
        },
        {
            "inputs": [{
                    "internalType": "address",
                    "name": "tokenA",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "tokenB",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "amountADesired",
                    "type": "uint256",
                },
                {
                    "internalType": "uint256",
                    "name": "amountBDesired",
                    "type": "uint256",
                },
                {
                    "internalType": "uint256",
                    "name": "amountAMin",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "amountBMin",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "deadline",
                    "type": "uint256"
                },
            ],
            "name": "addLiquidity",
            "outputs": [{
                    "internalType": "uint256",
                    "name": "amountA",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "amountB",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "liquidity",
                    "type": "uint256"
                },
            ],
            "stateMutability": "nonpayable",
            "type": "function",
        },
        {
            "inputs": [{
                    "internalType": "address",
                    "name": "token",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "amountTokenDesired",
                    "type": "uint256",
                },
                {
                    "internalType": "uint256",
                    "name": "amountTokenMin",
                    "type": "uint256",
                },
                {
                    "internalType": "uint256",
                    "name": "amountETHMin",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "deadline",
                    "type": "uint256"
                },
            ],
            "name": "addLiquidityETH",
            "outputs": [{
                    "internalType": "uint256",
                    "name": "amountToken",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "amountETH",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "liquidity",
                    "type": "uint256"
                },
            ],
            "stateMutability": "payable",
            "type": "function",
        },
        {
            "inputs": [],
            "name": "factory",
            "outputs": [{
                "internalType": "address",
                "name": "",
                "type": "address"
            }],
            "stateMutability": "view",
            "type": "function",
        },
        {
            "inputs": [{
                    "internalType": "uint256",
                    "name": "amountOut",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "reserveIn",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "reserveOut",
                    "type": "uint256"
                },
            ],
            "name": "getAmountIn",
            "outputs": [{
                "internalType": "uint256",
                "name": "amountIn",
                "type": "uint256"
            }],
            "stateMutability": "pure",
            "type": "function",
        },
        {
            "inputs": [{
                    "internalType": "uint256",
                    "name": "amountIn",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "reserveIn",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "reserveOut",
                    "type": "uint256"
                },
            ],
            "name": "getAmountOut",
            "outputs": [{
                "internalType": "uint256",
                "name": "amountOut",
                "type": "uint256"
            }],
            "stateMutability": "pure",
            "type": "function",
        },
        {
            "inputs": [{
                    "internalType": "uint256",
                    "name": "amountOut",
                    "type": "uint256"
                },
                {
                    "internalType": "address[]",
                    "name": "path",
                    "type": "address[]"
                },
            ],
            "name": "getAmountsIn",
            "outputs": [{
                "internalType": "uint256[]",
                "name": "amounts",
                "type": "uint256[]"
            }],
            "stateMutability": "view",
            "type": "function",
        },
        {
            "inputs": [{
                    "internalType": "uint256",
                    "name": "amountIn",
                    "type": "uint256"
                },
                {
                    "internalType": "address[]",
                    "name": "path",
                    "type": "address[]"
                },
            ],
            "name": "getAmountsOut",
            "outputs": [{
                "internalType": "uint256[]",
                "name": "amounts",
                "type": "uint256[]"
            }],
            "stateMutability": "view",
            "type": "function",
        },
        {
            "inputs": [{
                    "internalType": "uint256",
                    "name": "amountA",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "reserveA",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "reserveB",
                    "type": "uint256"
                },
            ],
            "name": "quote",
            "outputs": [{
                "internalType": "uint256",
                "name": "amountB",
                "type": "uint256"
            }],
            "stateMutability": "pure",
            "type": "function",
        },
        {
            "inputs": [{
                    "internalType": "address",
                    "name": "tokenA",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "tokenB",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "liquidity",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "amountAMin",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "amountBMin",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "deadline",
                    "type": "uint256"
                },
            ],
            "name": "removeLiquidity",
            "outputs": [{
                    "internalType": "uint256",
                    "name": "amountA",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "amountB",
                    "type": "uint256"
                },
            ],
            "stateMutability": "nonpayable",
            "type": "function",
        },
        {
            "inputs": [{
                    "internalType": "address",
                    "name": "token",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "liquidity",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "amountTokenMin",
                    "type": "uint256",
                },
                {
                    "internalType": "uint256",
                    "name": "amountETHMin",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "deadline",
                    "type": "uint256"
                },
            ],
            "name": "removeLiquidityETH",
            "outputs": [{
                    "internalType": "uint256",
                    "name": "amountToken",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "amountETH",
                    "type": "uint256"
                },
            ],
            "stateMutability": "nonpayable",
            "type": "function",
        },
        {
            "inputs": [{
                    "internalType": "address",
                    "name": "token",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "liquidity",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "amountTokenMin",
                    "type": "uint256",
                },
                {
                    "internalType": "uint256",
                    "name": "amountETHMin",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "deadline",
                    "type": "uint256"
                },
            ],
            "name": "removeLiquidityETHSupportingFeeOnTransferTokens",
            "outputs": [{
                "internalType": "uint256",
                "name": "amountETH",
                "type": "uint256"
            }],
            "stateMutability": "nonpayable",
            "type": "function",
        },
        {
            "inputs": [{
                    "internalType": "address",
                    "name": "token",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "liquidity",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "amountTokenMin",
                    "type": "uint256",
                },
                {
                    "internalType": "uint256",
                    "name": "amountETHMin",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "deadline",
                    "type": "uint256"
                },
                {
                    "internalType": "bool",
                    "name": "approveMax",
                    "type": "bool"
                },
                {
                    "internalType": "uint8",
                    "name": "v",
                    "type": "uint8"
                },
                {
                    "internalType": "bytes32",
                    "name": "r",
                    "type": "bytes32"
                },
                {
                    "internalType": "bytes32",
                    "name": "s",
                    "type": "bytes32"
                },
            ],
            "name": "removeLiquidityETHWithPermit",
            "outputs": [{
                    "internalType": "uint256",
                    "name": "amountToken",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "amountETH",
                    "type": "uint256"
                },
            ],
            "stateMutability": "nonpayable",
            "type": "function",
        },
        {
            "inputs": [{
                    "internalType": "address",
                    "name": "token",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "liquidity",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "amountTokenMin",
                    "type": "uint256",
                },
                {
                    "internalType": "uint256",
                    "name": "amountETHMin",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "deadline",
                    "type": "uint256"
                },
                {
                    "internalType": "bool",
                    "name": "approveMax",
                    "type": "bool"
                },
                {
                    "internalType": "uint8",
                    "name": "v",
                    "type": "uint8"
                },
                {
                    "internalType": "bytes32",
                    "name": "r",
                    "type": "bytes32"
                },
                {
                    "internalType": "bytes32",
                    "name": "s",
                    "type": "bytes32"
                },
            ],
            "name": "removeLiquidityETHWithPermitSupportingFeeOnTransferTokens",
            "outputs": [{
                "internalType": "uint256",
                "name": "amountETH",
                "type": "uint256"
            }],
            "stateMutability": "nonpayable",
            "type": "function",
        },
        {
            "inputs": [{
                    "internalType": "address",
                    "name": "tokenA",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "tokenB",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "liquidity",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "amountAMin",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "amountBMin",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "deadline",
                    "type": "uint256"
                },
                {
                    "internalType": "bool",
                    "name": "approveMax",
                    "type": "bool"
                },
                {
                    "internalType": "uint8",
                    "name": "v",
                    "type": "uint8"
                },
                {
                    "internalType": "bytes32",
                    "name": "r",
                    "type": "bytes32"
                },
                {
                    "internalType": "bytes32",
                    "name": "s",
                    "type": "bytes32"
                },
            ],
            "name": "removeLiquidityWithPermit",
            "outputs": [{
                    "internalType": "uint256",
                    "name": "amountA",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "amountB",
                    "type": "uint256"
                },
            ],
            "stateMutability": "nonpayable",
            "type": "function",
        },
        {
            "inputs": [{
                    "internalType": "uint256",
                    "name": "amountOut",
                    "type": "uint256"
                },
                {
                    "internalType": "address[]",
                    "name": "path",
                    "type": "address[]"
                },
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "deadline",
                    "type": "uint256"
                },
            ],
            "name": "swapETHForExactTokens",
            "outputs": [{
                "internalType": "uint256[]",
                "name": "amounts",
                "type": "uint256[]"
            }],
            "stateMutability": "payable",
            "type": "function",
        },
        {
            "inputs": [{
                    "internalType": "uint256",
                    "name": "amountOutMin",
                    "type": "uint256"
                },
                {
                    "internalType": "address[]",
                    "name": "path",
                    "type": "address[]"
                },
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "deadline",
                    "type": "uint256"
                },
            ],
            "name": "swapExactETHForTokens",
            "outputs": [{
                "internalType": "uint256[]",
                "name": "amounts",
                "type": "uint256[]"
            }],
            "stateMutability": "payable",
            "type": "function",
        },
        {
            "inputs": [{
                    "internalType": "uint256",
                    "name": "amountOutMin",
                    "type": "uint256"
                },
                {
                    "internalType": "address[]",
                    "name": "path",
                    "type": "address[]"
                },
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "deadline",
                    "type": "uint256"
                },
            ],
            "name": "swapExactETHForTokensSupportingFeeOnTransferTokens",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function",
        },
        {
            "inputs": [{
                    "internalType": "uint256",
                    "name": "amountIn",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "amountOutMin",
                    "type": "uint256"
                },
                {
                    "internalType": "address[]",
                    "name": "path",
                    "type": "address[]"
                },
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "deadline",
                    "type": "uint256"
                },
            ],
            "name": "swapExactTokensForETH",
            "outputs": [{
                "internalType": "uint256[]",
                "name": "amounts",
                "type": "uint256[]"
            }],
            "stateMutability": "nonpayable",
            "type": "function",
        },
        {
            "inputs": [{
                    "internalType": "uint256",
                    "name": "amountIn",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "amountOutMin",
                    "type": "uint256"
                },
                {
                    "internalType": "address[]",
                    "name": "path",
                    "type": "address[]"
                },
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "deadline",
                    "type": "uint256"
                },
            ],
            "name": "swapExactTokensForETHSupportingFeeOnTransferTokens",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function",
        },
        {
            "inputs": [{
                    "internalType": "uint256",
                    "name": "amountIn",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "amountOutMin",
                    "type": "uint256"
                },
                {
                    "internalType": "address[]",
                    "name": "path",
                    "type": "address[]"
                },
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "deadline",
                    "type": "uint256"
                },
            ],
            "name": "swapExactTokensForTokens",
            "outputs": [{
                "internalType": "uint256[]",
                "name": "amounts",
                "type": "uint256[]"
            }],
            "stateMutability": "nonpayable",
            "type": "function",
        },
        {
            "inputs": [{
                    "internalType": "uint256",
                    "name": "amountIn",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "amountOutMin",
                    "type": "uint256"
                },
                {
                    "internalType": "address[]",
                    "name": "path",
                    "type": "address[]"
                },
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "deadline",
                    "type": "uint256"
                },
            ],
            "name": "swapExactTokensForTokensSupportingFeeOnTransferTokens",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function",
        },
        {
            "inputs": [{
                    "internalType": "uint256",
                    "name": "amountOut",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "amountInMax",
                    "type": "uint256"
                },
                {
                    "internalType": "address[]",
                    "name": "path",
                    "type": "address[]"
                },
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "deadline",
                    "type": "uint256"
                },
            ],
            "name": "swapTokensForExactETH",
            "outputs": [{
                "internalType": "uint256[]",
                "name": "amounts",
                "type": "uint256[]"
            }],
            "stateMutability": "nonpayable",
            "type": "function",
        },
        {
            "inputs": [{
                    "internalType": "uint256",
                    "name": "amountOut",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "amountInMax",
                    "type": "uint256"
                },
                {
                    "internalType": "address[]",
                    "name": "path",
                    "type": "address[]"
                },
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "deadline",
                    "type": "uint256"
                },
            ],
            "name": "swapTokensForExactTokens",
            "outputs": [{
                "internalType": "uint256[]",
                "name": "amounts",
                "type": "uint256[]"
            }],
            "stateMutability": "nonpayable",
            "type": "function",
        },
        {
            "stateMutability": "payable",
            "type": "receive"
        },
    ],
    "ERC20": [{
            "inputs": [{
                    "internalType": "string",
                    "name": "name_",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "symbol_",
                    "type": "string"
                },
            ],
            "stateMutability": "nonpayable",
            "type": "constructor",
        },
        {
            "anonymous": false,
            "inputs": [{
                    "indexed": true,
                    "internalType": "address",
                    "name": "owner",
                    "type": "address",
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "spender",
                    "type": "address",
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "value",
                    "type": "uint256",
                },
            ],
            "name": "Approval",
            "type": "event",
        },
        {
            "anonymous": false,
            "inputs": [{
                    "indexed": true,
                    "internalType": "address",
                    "name": "from",
                    "type": "address",
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "to",
                    "type": "address",
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "value",
                    "type": "uint256",
                },
            ],
            "name": "Transfer",
            "type": "event",
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
                },
            ],
            "name": "allowance",
            "outputs": [{
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }],
            "stateMutability": "view",
            "type": "function",
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
                },
            ],
            "name": "approve",
            "outputs": [{
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }],
            "stateMutability": "nonpayable",
            "type": "function",
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
            "type": "function",
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
            "type": "function",
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
                    "type": "uint256",
                },
            ],
            "name": "decreaseAllowance",
            "outputs": [{
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }],
            "stateMutability": "nonpayable",
            "type": "function",
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
                },
            ],
            "name": "increaseAllowance",
            "outputs": [{
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }],
            "stateMutability": "nonpayable",
            "type": "function",
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
            "type": "function",
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
            "type": "function",
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
            "type": "function",
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
                },
            ],
            "name": "transfer",
            "outputs": [{
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }],
            "stateMutability": "nonpayable",
            "type": "function",
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
                },
            ],
            "name": "transferFrom",
            "outputs": [{
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }],
            "stateMutability": "nonpayable",
            "type": "function",
        },
    ],
    "0xcc697f04Ce6CAbC8B910372A7867fA190104F483": [{
            "inputs": [{
                    "internalType": "contract IBEP20Mintable",
                    "name": "_egg",
                    "type": "address",
                },
                {
                    "internalType": "address",
                    "name": "_feeAddress",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "_eggPerBlock",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_startBlock",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "_wpscAddress",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "_regulatorOwner",
                    "type": "address",
                },
                {
                    "internalType": "address",
                    "name": "_oracleAddress",
                    "type": "address",
                },
                {
                    "internalType": "uint256",
                    "name": "_kStart",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_kTarget",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_pStart",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_pTarget",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "_socialFi",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "_socialFiOwner",
                    "type": "address",
                },
            ],
            "stateMutability": "nonpayable",
            "type": "constructor",
        },
        {
            "anonymous": false,
            "inputs": [{
                    "indexed": true,
                    "internalType": "address",
                    "name": "user",
                    "type": "address",
                },
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "pid",
                    "type": "uint256",
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256",
                },
            ],
            "name": "Deposit",
            "type": "event",
        },
        {
            "anonymous": false,
            "inputs": [{
                    "indexed": true,
                    "internalType": "address",
                    "name": "user",
                    "type": "address",
                },
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "pid",
                    "type": "uint256",
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256",
                },
            ],
            "name": "EmergencyWithdraw",
            "type": "event",
        },
        {
            "anonymous": false,
            "inputs": [{
                    "indexed": true,
                    "internalType": "address",
                    "name": "user",
                    "type": "address",
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256",
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "amountBurn",
                    "type": "uint256",
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "pid",
                    "type": "uint256",
                },
            ],
            "name": "Harvest",
            "type": "event",
        },
        {
            "anonymous": false,
            "inputs": [{
                    "indexed": true,
                    "internalType": "address",
                    "name": "previousOwner",
                    "type": "address",
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "newOwner",
                    "type": "address",
                },
            ],
            "name": "OwnershipTransferred",
            "type": "event",
        },
        {
            "anonymous": false,
            "inputs": [{
                    "indexed": true,
                    "internalType": "address",
                    "name": "sender",
                    "type": "address",
                },
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "to",
                    "type": "address",
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256",
                },
            ],
            "name": "SendWpsc2SocialFi",
            "type": "event",
        },
        {
            "anonymous": false,
            "inputs": [{
                    "indexed": true,
                    "internalType": "address",
                    "name": "user",
                    "type": "address",
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "newAddress",
                    "type": "address",
                },
            ],
            "name": "SetFeeAddress",
            "type": "event",
        },
        {
            "anonymous": false,
            "inputs": [{
                    "indexed": true,
                    "internalType": "address",
                    "name": "user",
                    "type": "address",
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "ks",
                    "type": "uint256",
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "kt",
                    "type": "uint256",
                },
            ],
            "name": "SetK",
            "type": "event",
        },
        {
            "anonymous": false,
            "inputs": [{
                    "indexed": true,
                    "internalType": "address",
                    "name": "user",
                    "type": "address",
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "ps",
                    "type": "uint256",
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "pt",
                    "type": "uint256",
                },
            ],
            "name": "SetP",
            "type": "event",
        },
        {
            "anonymous": false,
            "inputs": [{
                    "indexed": true,
                    "internalType": "address",
                    "name": "user",
                    "type": "address",
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "rateMin",
                    "type": "uint256",
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "rateMax",
                    "type": "uint256",
                },
            ],
            "name": "SetReleaseRate",
            "type": "event",
        },
        {
            "anonymous": false,
            "inputs": [{
                    "indexed": true,
                    "internalType": "address",
                    "name": "user",
                    "type": "address",
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "goosePerBlock",
                    "type": "uint256",
                },
            ],
            "name": "UpdateEmissionRate",
            "type": "event",
        },
        {
            "anonymous": false,
            "inputs": [{
                    "indexed": true,
                    "internalType": "address",
                    "name": "user",
                    "type": "address",
                },
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "pid",
                    "type": "uint256",
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256",
                },
            ],
            "name": "Withdraw",
            "type": "event",
        },
        {
            "inputs": [],
            "name": "BONUS_MULTIPLIER",
            "outputs": [{
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }],
            "stateMutability": "view",
            "type": "function",
        },
        {
            "inputs": [],
            "name": "PERIOD",
            "outputs": [{
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }],
            "stateMutability": "view",
            "type": "function",
        },
        {
            "inputs": [{
                    "internalType": "uint256",
                    "name": "_allocPoint",
                    "type": "uint256"
                },
                {
                    "internalType": "contract IBEP20",
                    "name": "_lpToken",
                    "type": "address",
                },
                {
                    "internalType": "uint16",
                    "name": "_depositFeeBP",
                    "type": "uint16"
                },
                {
                    "internalType": "bool",
                    "name": "_withUpdate",
                    "type": "bool"
                },
                {
                    "internalType": "bool",
                    "name": "_isDEXLP",
                    "type": "bool"
                },
            ],
            "name": "add",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function",
        },
        {
            "inputs": [],
            "name": "burnRate",
            "outputs": [{
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }],
            "stateMutability": "view",
            "type": "function",
        },
        {
            "inputs": [],
            "name": "dayYield",
            "outputs": [{
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }],
            "stateMutability": "view",
            "type": "function",
        },
        {
            "inputs": [{
                    "internalType": "uint256",
                    "name": "_pid",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_amount",
                    "type": "uint256"
                },
            ],
            "name": "deposit",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function",
        },
        {
            "inputs": [],
            "name": "egg",
            "outputs": [{
                "internalType": "contract IBEP20Mintable",
                "name": "",
                "type": "address",
            }],
            "stateMutability": "view",
            "type": "function",
        },
        {
            "inputs": [],
            "name": "eggPerBlock",
            "outputs": [{
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }],
            "stateMutability": "view",
            "type": "function",
        },
        {
            "inputs": [{
                "internalType": "uint256",
                "name": "_pid",
                "type": "uint256"
            }],
            "name": "emergencyWithdraw",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function",
        },
        {
            "inputs": [],
            "name": "feeAddress",
            "outputs": [{
                "internalType": "address",
                "name": "",
                "type": "address"
            }],
            "stateMutability": "view",
            "type": "function",
        },
        {
            "inputs": [],
            "name": "getData",
            "outputs": [{
                    "internalType": "uint256",
                    "name": "t",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "a",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "fp",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "b",
                    "type": "uint256"
                },
            ],
            "stateMutability": "view",
            "type": "function",
        },
        {
            "inputs": [],
            "name": "getIsUpdate",
            "outputs": [{
                "internalType": "bool",
                "name": "t",
                "type": "bool"
            }],
            "stateMutability": "view",
            "type": "function",
        },
        {
            "inputs": [{
                    "internalType": "uint256",
                    "name": "_from",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_to",
                    "type": "uint256"
                },
            ],
            "name": "getMultiplier",
            "outputs": [{
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }],
            "stateMutability": "view",
            "type": "function",
        },
        {
            "inputs": [{
                "internalType": "uint256",
                "name": "_pid",
                "type": "uint256"
            }],
            "name": "harvest",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function",
        },
        {
            "inputs": [],
            "name": "kStart",
            "outputs": [{
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }],
            "stateMutability": "view",
            "type": "function",
        },
        {
            "inputs": [],
            "name": "kTarget",
            "outputs": [{
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }],
            "stateMutability": "view",
            "type": "function",
        },
        {
            "inputs": [],
            "name": "lastSocialSendTimeStamp",
            "outputs": [{
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }],
            "stateMutability": "view",
            "type": "function",
        },
        {
            "inputs": [],
            "name": "massUpdatePools",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function",
        },
        {
            "inputs": [],
            "name": "oracleAddress",
            "outputs": [{
                "internalType": "address",
                "name": "",
                "type": "address"
            }],
            "stateMutability": "view",
            "type": "function",
        },
        {
            "inputs": [],
            "name": "owner",
            "outputs": [{
                "internalType": "address",
                "name": "",
                "type": "address"
            }],
            "stateMutability": "view",
            "type": "function",
        },
        {
            "inputs": [],
            "name": "pStart",
            "outputs": [{
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }],
            "stateMutability": "view",
            "type": "function",
        },
        {
            "inputs": [],
            "name": "pTarget",
            "outputs": [{
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }],
            "stateMutability": "view",
            "type": "function",
        },
        {
            "inputs": [{
                    "internalType": "uint256",
                    "name": "_pid",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "_user",
                    "type": "address"
                },
            ],
            "name": "pendingEgg",
            "outputs": [{
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }],
            "stateMutability": "view",
            "type": "function",
        },
        {
            "inputs": [],
            "name": "perBlockTimeSeconds",
            "outputs": [{
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }],
            "stateMutability": "view",
            "type": "function",
        },
        {
            "inputs": [{
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }],
            "name": "poolInfo",
            "outputs": [{
                    "internalType": "contract IBEP20",
                    "name": "lpToken",
                    "type": "address",
                },
                {
                    "internalType": "uint256",
                    "name": "allocPoint",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "lastRewardBlock",
                    "type": "uint256",
                },
                {
                    "internalType": "uint256",
                    "name": "accEggPerShare",
                    "type": "uint256",
                },
                {
                    "internalType": "uint16",
                    "name": "depositFeeBP",
                    "type": "uint16"
                },
                {
                    "internalType": "bool",
                    "name": "isDEXLP",
                    "type": "bool"
                },
            ],
            "stateMutability": "view",
            "type": "function",
        },
        {
            "inputs": [],
            "name": "poolLength",
            "outputs": [{
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }],
            "stateMutability": "view",
            "type": "function",
        },
        {
            "inputs": [],
            "name": "recordProfits",
            "outputs": [{
                "internalType": "address",
                "name": "",
                "type": "address"
            }],
            "stateMutability": "view",
            "type": "function",
        },
        {
            "inputs": [],
            "name": "regulatorOwner",
            "outputs": [{
                "internalType": "address",
                "name": "",
                "type": "address"
            }],
            "stateMutability": "view",
            "type": "function",
        },
        {
            "inputs": [],
            "name": "releaseRateMax",
            "outputs": [{
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }],
            "stateMutability": "view",
            "type": "function",
        },
        {
            "inputs": [],
            "name": "releaseRateMin",
            "outputs": [{
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }],
            "stateMutability": "view",
            "type": "function",
        },
        {
            "inputs": [],
            "name": "renounceOwnership",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function",
        },
        {
            "inputs": [],
            "name": "sendWpsc2SocialFi",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function",
        },
        {
            "inputs": [{
                    "internalType": "uint256",
                    "name": "_pid",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_allocPoint",
                    "type": "uint256"
                },
                {
                    "internalType": "uint16",
                    "name": "_depositFeeBP",
                    "type": "uint16"
                },
                {
                    "internalType": "contract IBEP20",
                    "name": "_lpToken",
                    "type": "address",
                },
                {
                    "internalType": "uint256",
                    "name": "_lastRewardBlock",
                    "type": "uint256",
                },
                {
                    "internalType": "uint256",
                    "name": "_accEggPerShare",
                    "type": "uint256",
                },
                {
                    "internalType": "bool",
                    "name": "_isDEXLP",
                    "type": "bool"
                },
                {
                    "internalType": "bool",
                    "name": "_withUpdate",
                    "type": "bool"
                },
                {
                    "internalType": "bool",
                    "name": "_updateLastAndAcc",
                    "type": "bool"
                },
            ],
            "name": "set",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function",
        },
        {
            "inputs": [{
                "internalType": "uint256",
                "name": "rate_",
                "type": "uint256"
            }],
            "name": "setBurnRate",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function",
        },
        {
            "inputs": [{
                "internalType": "address",
                "name": "egg_",
                "type": "address"
            }],
            "name": "setEgg",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function",
        },
        {
            "inputs": [{
                "internalType": "address",
                "name": "_feeAddress",
                "type": "address"
            }],
            "name": "setFeeAddress",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function",
        },
        {
            "inputs": [{
                "internalType": "bool",
                "name": "bool_",
                "type": "bool"
            }],
            "name": "setIsUpdate",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function",
        },
        {
            "inputs": [{
                    "internalType": "uint256",
                    "name": "ks_",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "kt_",
                    "type": "uint256"
                },
            ],
            "name": "setK",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function",
        },
        {
            "inputs": [{
                "internalType": "address",
                "name": "oracle_",
                "type": "address"
            }],
            "name": "setOracle",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function",
        },
        {
            "inputs": [{
                    "internalType": "uint256",
                    "name": "ps_",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "pt_",
                    "type": "uint256"
                },
            ],
            "name": "setP",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function",
        },
        {
            "inputs": [{
                "internalType": "uint256",
                "name": "sec_",
                "type": "uint256"
            }],
            "name": "setPerBlockTimeSeconds",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function",
        },
        {
            "inputs": [{
                "internalType": "address",
                "name": "_addr",
                "type": "address"
            }],
            "name": "setRecordProfits",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function",
        },
        {
            "inputs": [{
                "internalType": "address",
                "name": "owner_",
                "type": "address"
            }],
            "name": "setRegulatorOwner",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function",
        },
        {
            "inputs": [{
                    "internalType": "uint256",
                    "name": "rateMin_",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "rateMax_",
                    "type": "uint256"
                },
            ],
            "name": "setReleaseRate",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function",
        },
        {
            "inputs": [{
                "internalType": "address",
                "name": "social_",
                "type": "address"
            }],
            "name": "setSocialFi",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function",
        },
        {
            "inputs": [{
                "internalType": "address",
                "name": "addr_",
                "type": "address"
            }],
            "name": "setSocialFiOwner",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function",
        },
        {
            "inputs": [{
                    "internalType": "uint256",
                    "name": "_pid",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "_addr",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "_amount",
                    "type": "uint256"
                },
                {
                    "internalType": "bool",
                    "name": "_isMigrate",
                    "type": "bool"
                },
            ],
            "name": "setUserInfo",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function",
        },
        {
            "inputs": [],
            "name": "socialFi",
            "outputs": [{
                "internalType": "address",
                "name": "",
                "type": "address"
            }],
            "stateMutability": "view",
            "type": "function",
        },
        {
            "inputs": [],
            "name": "socialFiOwner",
            "outputs": [{
                "internalType": "address",
                "name": "",
                "type": "address"
            }],
            "stateMutability": "view",
            "type": "function",
        },
        {
            "inputs": [],
            "name": "startBlock",
            "outputs": [{
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }],
            "stateMutability": "view",
            "type": "function",
        },
        {
            "inputs": [],
            "name": "totalAllocPoint",
            "outputs": [{
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }],
            "stateMutability": "view",
            "type": "function",
        },
        {
            "inputs": [{
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }],
            "name": "transferOwnership",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function",
        },
        {
            "inputs": [{
                "internalType": "uint256",
                "name": "_eggPerBlock",
                "type": "uint256"
            }],
            "name": "updateEmissionRate",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function",
        },
        {
            "inputs": [{
                "internalType": "uint256",
                "name": "_pid",
                "type": "uint256"
            }],
            "name": "updatePool",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function",
        },
        {
            "inputs": [],
            "name": "updateRegulator",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function",
        },
        {
            "inputs": [{
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                },
            ],
            "name": "userInfo",
            "outputs": [{
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "rewardDebt",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "rewardBalance",
                    "type": "uint256"
                },
                {
                    "internalType": "bool",
                    "name": "isMigrate",
                    "type": "bool"
                },
            ],
            "stateMutability": "view",
            "type": "function",
        },
        {
            "inputs": [{
                    "internalType": "uint256",
                    "name": "_pid",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_amount",
                    "type": "uint256"
                },
            ],
            "name": "withdraw",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function",
        },
        {
            "inputs": [],
            "name": "wpscAddress",
            "outputs": [{
                "internalType": "address",
                "name": "",
                "type": "address"
            }],
            "stateMutability": "view",
            "type": "function",
        },
    ],
    "0x89D43f686a0290d3370b7786bc04301ac08d690F": [{
            "inputs": [{
                    "internalType": "address",
                    "name": "_wpsc",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "_ProfitContractAddr",
                    "type": "address",
                },
                {
                    "internalType": "address",
                    "name": "_RecommendContractAddr",
                    "type": "address",
                },
                {
                    "internalType": "address",
                    "name": "_poolAddr",
                    "type": "address"
                },
            ],
            "stateMutability": "nonpayable",
            "type": "constructor",
        },
        {
            "anonymous": false,
            "inputs": [{
                    "indexed": true,
                    "internalType": "address",
                    "name": "previousOwner",
                    "type": "address",
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "newOwner",
                    "type": "address",
                },
            ],
            "name": "OwnershipTransferred",
            "type": "event",
        },
        {
            "anonymous": false,
            "inputs": [{
                    "indexed": true,
                    "internalType": "address",
                    "name": "myAddress",
                    "type": "address",
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "RecommendAddr",
                    "type": "address",
                },
            ],
            "name": "RecommendDataEvent",
            "type": "event",
        },
        {
            "anonymous": false,
            "inputs": [{
                    "indexed": true,
                    "internalType": "address",
                    "name": "mainAddr",
                    "type": "address",
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "spareAddr",
                    "type": "address",
                },
            ],
            "name": "changeSpareEvent",
            "type": "event",
        },
        {
            "anonymous": false,
            "inputs": [{
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256",
                },
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "height",
                    "type": "uint256",
                },
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "frequency",
                    "type": "uint256",
                },
            ],
            "name": "receivePscDataEvent",
            "type": "event",
        },
        {
            "anonymous": false,
            "inputs": [{
                    "indexed": true,
                    "internalType": "address",
                    "name": "addr",
                    "type": "address",
                },
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256",
                },
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "burnAmount",
                    "type": "uint256",
                },
            ],
            "name": "withdrawEvent",
            "type": "event",
        },
        {
            "inputs": [],
            "name": "ProfitContractAddr",
            "outputs": [{
                "internalType": "address",
                "name": "",
                "type": "address"
            }],
            "stateMutability": "view",
            "type": "function",
        },
        {
            "inputs": [],
            "name": "RecommendContractAddr",
            "outputs": [{
                "internalType": "address",
                "name": "",
                "type": "address"
            }],
            "stateMutability": "view",
            "type": "function",
        },
        {
            "inputs": [{
                    "internalType": "address",
                    "name": "addr",
                    "type": "address"
                },
                {
                    "internalType": "uint8",
                    "name": "levels",
                    "type": "uint8"
                },
            ],
            "name": "addSecondaryAdmin",
            "outputs": [{
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }],
            "stateMutability": "nonpayable",
            "type": "function",
        },
        {
            "inputs": [{
                "internalType": "address",
                "name": "",
                "type": "address"
            }],
            "name": "adminMap",
            "outputs": [{
                "internalType": "uint8",
                "name": "",
                "type": "uint8"
            }],
            "stateMutability": "view",
            "type": "function",
        },
        {
            "inputs": [],
            "name": "confirmTransferOwnership",
            "outputs": [{
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }],
            "stateMutability": "nonpayable",
            "type": "function",
        },
        {
            "inputs": [{
                "internalType": "address",
                "name": "addr",
                "type": "address"
            }],
            "name": "deleteSecondaryAdmin",
            "outputs": [{
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }],
            "stateMutability": "nonpayable",
            "type": "function",
        },
        {
            "inputs": [{
                "internalType": "string",
                "name": "",
                "type": "string"
            }],
            "name": "funcLevelMap",
            "outputs": [{
                "internalType": "uint8",
                "name": "",
                "type": "uint8"
            }],
            "stateMutability": "view",
            "type": "function",
        },
        {
            "inputs": [],
            "name": "lockType",
            "outputs": [{
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }],
            "stateMutability": "view",
            "type": "function",
        },
        {
            "inputs": [],
            "name": "owner",
            "outputs": [{
                "internalType": "address",
                "name": "",
                "type": "address"
            }],
            "stateMutability": "view",
            "type": "function",
        },
        {
            "inputs": [],
            "name": "poolAddr",
            "outputs": [{
                "internalType": "address",
                "name": "",
                "type": "address"
            }],
            "stateMutability": "view",
            "type": "function",
        },
        {
            "inputs": [{
                    "internalType": "string",
                    "name": "funcName",
                    "type": "string"
                },
                {
                    "internalType": "uint8",
                    "name": "levels",
                    "type": "uint8"
                },
            ],
            "name": "setFuncLevel",
            "outputs": [{
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }],
            "stateMutability": "nonpayable",
            "type": "function",
        },
        {
            "inputs": [],
            "name": "setLock",
            "outputs": [{
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }],
            "stateMutability": "nonpayable",
            "type": "function",
        },
        {
            "inputs": [],
            "name": "setUnLock",
            "outputs": [{
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }],
            "stateMutability": "nonpayable",
            "type": "function",
        },
        {
            "inputs": [],
            "name": "spareOwner",
            "outputs": [{
                "internalType": "address",
                "name": "",
                "type": "address"
            }],
            "stateMutability": "view",
            "type": "function",
        },
        {
            "inputs": [{
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }],
            "name": "transferOwnership",
            "outputs": [{
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }],
            "stateMutability": "nonpayable",
            "type": "function",
        },
        {
            "inputs": [],
            "name": "wpsc",
            "outputs": [{
                "internalType": "address",
                "name": "",
                "type": "address"
            }],
            "stateMutability": "view",
            "type": "function",
        },
        {
            "inputs": [{
                    "internalType": "uint256",
                    "name": "date",
                    "type": "uint256"
                },
                {
                    "components": [{
                            "internalType": "address",
                            "name": "addr",
                            "type": "address"
                        },
                        {
                            "internalType": "uint256",
                            "name": "profit",
                            "type": "uint256",
                        },
                    ],
                    "internalType": "struct Structs.ProfitData[]",
                    "name": "pro",
                    "type": "tuple[]",
                },
            ],
            "name": "updateProfitData",
            "outputs": [{
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }],
            "stateMutability": "nonpayable",
            "type": "function",
        },
        {
            "inputs": [{
                "internalType": "address",
                "name": "addr",
                "type": "address"
            }],
            "name": "register",
            "outputs": [{
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }],
            "stateMutability": "nonpayable",
            "type": "function",
        },
        {
            "inputs": [{
                "internalType": "address",
                "name": "addr",
                "type": "address"
            }],
            "name": "getUserData",
            "outputs": [{
                "components": [{
                        "internalType": "uint256",
                        "name": "userId",
                        "type": "uint256",
                    },
                    {
                        "internalType": "uint256",
                        "name": "version",
                        "type": "uint256",
                    },
                    {
                        "internalType": "uint256",
                        "name": "serialNumber",
                        "type": "uint256",
                    },
                    {
                        "internalType": "address",
                        "name": "mainAddr",
                        "type": "address",
                    },
                    {
                        "internalType": "address",
                        "name": "spareAddr",
                        "type": "address",
                    },
                    {
                        "internalType": "address",
                        "name": "superior",
                        "type": "address",
                    },
                    {
                        "internalType": "address[]",
                        "name": "subordinate",
                        "type": "address[]",
                    },
                ],
                "internalType": "struct RecommendInterfaces.User",
                "name": "",
                "type": "tuple",
            }],
            "stateMutability": "view",
            "type": "function",
        },
        {
            "inputs": [{
                "internalType": "address",
                "name": "addr",
                "type": "address"
            }],
            "name": "getUserData2",
            "outputs": [{
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                },
            ],
            "stateMutability": "view",
            "type": "function",
        },
        {
            "inputs": [{
                "internalType": "address",
                "name": "addr",
                "type": "address"
            }],
            "name": "getSubordinateDetail",
            "outputs": [{
                "internalType": "address[]",
                "name": "",
                "type": "address[]"
            }],
            "stateMutability": "view",
            "type": "function",
        },
        {
            "inputs": [{
                "internalType": "address",
                "name": "addr",
                "type": "address"
            }],
            "name": "getRecommendAddr",
            "outputs": [{
                "internalType": "address",
                "name": "",
                "type": "address"
            }],
            "stateMutability": "view",
            "type": "function",
        },
        {
            "inputs": [{
                "internalType": "address",
                "name": "addr",
                "type": "address"
            }],
            "name": "getPersonalProfit",
            "outputs": [{
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }],
            "stateMutability": "view",
            "type": "function",
        },
        {
            "inputs": [{
                "internalType": "address",
                "name": "addr",
                "type": "address"
            }],
            "name": "getSpareAddr",
            "outputs": [{
                "internalType": "address",
                "name": "",
                "type": "address"
            }],
            "stateMutability": "view",
            "type": "function",
        },
        {
            "inputs": [{
                "internalType": "address",
                "name": "addr",
                "type": "address"
            }],
            "name": "setSpareAddr",
            "outputs": [{
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }],
            "stateMutability": "nonpayable",
            "type": "function",
        },
        {
            "inputs": [{
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }],
            "name": "setChangeFee",
            "outputs": [{
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }],
            "stateMutability": "nonpayable",
            "type": "function",
        },
        {
            "inputs": [],
            "name": "getChangeFee",
            "outputs": [{
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }],
            "stateMutability": "view",
            "type": "function",
        },
        {
            "inputs": [{
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }],
            "name": "changeSpareAddr",
            "outputs": [{
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }],
            "stateMutability": "nonpayable",
            "type": "function",
        },
        {
            "inputs": [{
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }],
            "name": "withdrawalWPSC",
            "outputs": [{
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }],
            "stateMutability": "nonpayable",
            "type": "function",
        },
        {
            "inputs": [{
                "internalType": "address",
                "name": "addr",
                "type": "address"
            }],
            "name": "isParticipatingAddress",
            "outputs": [{
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }],
            "stateMutability": "view",
            "type": "function",
        },
        {
            "inputs": [{
                "internalType": "uint256",
                "name": "userId",
                "type": "uint256"
            }],
            "name": "getParticipatingAddress",
            "outputs": [{
                "internalType": "address",
                "name": "",
                "type": "address"
            }],
            "stateMutability": "view",
            "type": "function",
        },
        {
            "inputs": [{
                "internalType": "address",
                "name": "addr",
                "type": "address"
            }],
            "name": "getParticipatingId",
            "outputs": [{
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }],
            "stateMutability": "view",
            "type": "function",
        },
        {
            "inputs": [{
                "internalType": "address",
                "name": "addr",
                "type": "address"
            }],
            "name": "getAddressRevenueIncrement",
            "outputs": [{
                "components": [{
                        "internalType": "uint256",
                        "name": "date",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "profit",
                        "type": "uint256",
                    },
                ],
                "internalType": "struct Structs.IncrementData[]",
                "name": "",
                "type": "tuple[]",
            }],
            "stateMutability": "view",
            "type": "function",
        },
        {
            "inputs": [{
                "internalType": "address",
                "name": "addr",
                "type": "address"
            }],
            "name": "getWithdrawRecord",
            "outputs": [{
                "components": [{
                        "internalType": "uint256",
                        "name": "amount",
                        "type": "uint256",
                    },
                    {
                        "internalType": "uint256",
                        "name": "height",
                        "type": "uint256",
                    },
                ],
                "internalType": "struct Structs.PSCData[]",
                "name": "",
                "type": "tuple[]",
            }],
            "stateMutability": "view",
            "type": "function",
        },
        {
            "inputs": [{
                "internalType": "address",
                "name": "addr",
                "type": "address"
            }],
            "name": "setWPSCAddr",
            "outputs": [{
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }],
            "stateMutability": "nonpayable",
            "type": "function",
        },
        {
            "inputs": [{
                "internalType": "address",
                "name": "addr",
                "type": "address"
            }],
            "name": "setProfitContractAddr",
            "outputs": [{
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }],
            "stateMutability": "nonpayable",
            "type": "function",
        },
        {
            "inputs": [{
                "internalType": "address",
                "name": "addr",
                "type": "address"
            }],
            "name": "setRecommendContractAddr",
            "outputs": [{
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }],
            "stateMutability": "nonpayable",
            "type": "function",
        },
        {
            "inputs": [{
                "internalType": "address",
                "name": "addr",
                "type": "address"
            }],
            "name": "setPoolAddr",
            "outputs": [{
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }],
            "stateMutability": "nonpayable",
            "type": "function",
        },
    ],
}
export default {
    contract_abi
}