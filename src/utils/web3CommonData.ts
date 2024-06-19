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

export const NODE_PROVIDER_ETH = [
    "https://rpc.ankr.com/eth",
]

export const NODE_PROVIDER_PSC = [
    "https://seed0.polysmartchain.com",
    "https://seed1.PolySmartChain.com",
    "https://seed2.PolySmartChain.com",
]

export const NODE_PROVIDER_POLYGON = [
    "https://rpc.ankr.com/polygon",
    "https://polygon-rpc.com/",
    "https://rpc-mainnet.matic.quiknode.pro",
    "https://polygon.blockpi.network/v1/rpc/public",
]
export const NODE_PROVIDER_MUMBAI = [
    "https://rpc.ankr.com/polygon_mumbai",
    "https://polygon-mumbai-bor.publicnode.com",
    "https://polygontestapi.terminet.io/rpc",
    "https://rpc-mumbai.maticvigil.com",
    "https://polygon-mumbai.g.alchemy.com/v2/demo",
    "https://matic-testnet-archive-rpc.bwarelabs.com",
    "https://matic-mumbai.chainstacklabs.com",
    "https://polygon-testnet.public.blastapi.io",
]
export const NODE_PROVIDER_BSC = [
    "https://binance.llamarpc.com",
    "https://binance.ankr.com",
    "https://bscrpc.com",
    "https://bsc-dataseed2.binance.org",
    "https://bsc-dataseed4.binance.org",
    "https://bsc-dataseed1.binance.org",
    "https://bsc-dataseed3.binance.org",
]
export const NODE_PROVIDER_BSC_TEST = ["https://bsc-testnet.public.blastapi.io", "https://data-seed-prebsc-2-s1.bnbchain.org:8545",]
export const NODE_PROVIDER_HECO = ["https://http-mainnet.hecochain.com"]
export const NODE_PROVIDER_OKX = [
    "https://exchainrpc.okex.org",
]
export const NODE_PROVIDER_ARBITRUM = [
    "https://rpc.ankr.com/arbitrum",
    "https://arbitrum.blockpi.network/v1/rpc/public",
]
export const NODE_PROVIDER_OPBNB_TEST = [
    "https://opbnb-testnet.nodereal.io/v1/e9a36765eb8a40b9bd12e680a1fd2bc5",
    "https://opbnb-testnet-rpc.bnbchain.org",
    "https://opbnb-testnet.nodereal.io/v1/64a9df0874fb4a93b9d0a3849de012d3"
]

export const POLYGON_APIS = [
    "P2PW1XMG22AZCHS2BWMIFJ2QH1N6J9CNTZ",
]

export const ACCOUNTS_TEST = [
    {
        "address": "0x285bd8C75C7647b7da1C1154776633804d4ff5eC",
        "pk": "0xa010561d0ee36587adb4c9d81f4d19d84dc8b2246a9b7b8fd0665d1f8b15d844"
    },
    {
        "address": "0x79d0a22FEf4C6c79Ea46fcCbe654b83283D76480",
        "pk": "0xb56a7164b509b5a4c0e399328caf33b30dc8ef7ab314f1ce8172daeadc751bf2"
    },
    {
        "address": "0x3C3CC57ca14E07dF12C7007640f9140Cc4E6A5CB",
        "pk": "0xf51347d24bfff92da8ff36b12435ae0b0b73edf82ded4585a3df050e60fad9b6"
    },
    {
        "address": "0x3b0598170F7Ff76cFe3a6D91037ADd94AFDf3cC6",
        "pk": "0x6bf2f0fbb542ae563ee416464c9199ce20b2c962a20786b602e300259ceca746"
    },
    {
        "address": "0x973976fE19EC357a110eDBae2aFb80E80D87c7f5",
        "pk": "0x05421412f50b215967d0b0875587ce6d7b04a1e3360bca7b6a360b75ae40131d"
    },
    {
        "address": "0x5FD366eFEF9adA5afe909F67cfedC3FaC5480ACf",
        "pk": "0x1d030a5b1667491d857671a8d08257fed84e9a18966c8bef73d0c72009ee9c40"
    },
    {
        "address": "0x56cee2660105A4c90530ac74b65a0d58816ad12D",
        "pk": "0x68e9a2696a84a9af9b7b722eaf223356fe24aa92a98c6f765599ae9121684397"
    },
    {
        "address": "0x4Fe30D6aA1c2bD6071d2A3029e90Ad130c23d3f6",
        "pk": "0xf0eaf480101cb69265483e691492a206ba62e01379320c611f518a3940d4ccb1"
    },
    {
        "address": "0xc7ea61956e490D24c647a42CED35E8281CeA4fe3",
        "pk": "0xff28a13e90cbad12afe45c97275bd4e52b405e32f06923a64d61efd27d8d90c1"
    },
    {
        "address": "0x1520043665E78C7Dd8260eE093722FFC052DAae2",
        "pk": "0x56f73e8c249fc00282f589f9aaedabb0fbe0fa08a8bc6da3dff32bb7437eb4da"
    }
]
export const ETH_TOKENS = {
    "usdt": "0xdac17f958d2ee523a2206206994597c13d831ec7",
    "bnb": "0xB8c77482e45F1F44dE1745F52C74426C631bDD52",
    "usdc": "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
    "steth": "0xae7ab96520de3a18e5e111b5eaab095312d7fe84",
    "matic": "0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0",
    "busd": "0x4fabb145d64652a948d72533023f6e7a623c7c53",
    "theta": "0x3883f5e181fccaf8410fa61e12b59bad963fb645",
    "shib": "0x95aD61b0a150d79219dCF64E1E6Cc01f0B64C4cE",
    "dai": "0x6b175474e89094c44da98b954eedeac495271d0f",
    "wbtc": "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599",
    "uni": "0x1f9840a85d5af5bf1d1762f925bdaddc4201f984",
    "leo": "0x2af5d2ad76741191d15dfe7bf6ac92d4bd912ca3",
    "link": "0x514910771af9ca656af840dff83e8264ecf986ca",
    "hex": "0x2b591e99afe9f32eaa6214f7b7629768c40eeb39",
    "toncoin": "0x582d872a1b094fc48f5de31d3b73f2d9be47def1",
    "okb": "0x75231f58b43240c9718dd58b4967c5114342a86c",
    "tusd": "0x0000000000085d4780B73119b644AE5ecd22b376",
    "ldo": "0x5a98fcbea516cf06857215779fd812ca3bef1b32",
    "cro": "0xa0b73e1ff0b80914ab6fe0444e65848c4c34450b",
    "qnt": "0x4a220e6096b25eadb88358cb44068a3248254675",
    "near": "0x85f17cf997934a597031b2e18a9ab6ebd4b9f6a4",
    "arb": "0xB50721BCf8d664c30412Cfbc6cf7a15145234ad1",
    "ven": "0xd850942ef8811f2a866692a623011bde52a462c1",
    "ape": "0x4d224452801aced8b2f0aebe155379bb5d594381",
    "grt": "0xc944e90c64b2c07662a292be6244bdf05cda44a7",
    "usdp": "0x8e870d67f660d95d5be530380d0ec0bd388289e1",
    "frax": "0x853d955acef822db058eb8505911ed77f175b99e",
    "rndr": "0x6de037ef9ad2725eb40118bb1702ebb27e4aeb24",
    "sand": "0x3845badAde8e6dFF049820680d1F14bD3903a5d0",
    "ftm": "0x4e15361fd6b4bb609fa63c81a2be19d873717870",
    "aaave": "0xba3D9687Cf50fE253cd2e1cFeEdE1d6787344Ed5",
    "stkaave": "0x4da27a545c0c5b758a6ba100e3a049001de870f5",
    "rpl": "0xd33526068d116ce69f19a9ee46f0bd304f21a51f",
    "mana": "0x0f5d2fb29fb7d3cfee444a200298f468908cc942",
    "wmana": "0xfd09cf7cfffa9932e33668311c4777cb9db3c9be",
    "bit": "0x1a4b46696b2bb4794eb3d4c26f1c55f9170fa4c5",
    "usdd": "0x0C10bF8FcB7Bf5412187A595ab97a3609160b5c6",
    "snx": "0xc011a73ee8576fb46f5e1c5751ca3b9fe0af2a6f",
    "imx": "0xf57e7e7c23978c3caec3c3548e3d615c346e79ff",
    "kcs": "0xf34960d9d60be18cc1d5afc1a6f012a723a28811",
    "reth": "0xae78736cd615f374d3085123a210448e74fc6393",
    "gusd": "0x056fd409e1d7a124bd7017459dfea2f387b6d5cd",
    "btt": "0xc669928185dbce49d2230cc9b0979be6dc797957",
    "mkr": "0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2",
    "pepe": "0x6982508145454ce325ddbe47a25d4ec3d2311933",
    "chz": "0x3506424f91fd33084466f402d5d97f05f8e3b4af",
    "paxg": "0x45804880De22913dAFE09f4980848ECE6EcbAf78",
    "inj": "0xe28b3B32B6c345A34Ff64674606124Dd5Aceca30",
    "fxs": "0x3432b6a60d23ca0dfca7761b7ab56459d9c964d0",
    "ht": "0x6f259637dcd74c767781e37bc6133cd6a68aa161",
}
export const POLYGON_TOKENS = {
    "weth": "0x7ceb23fd6bc0add59e62ac25578270cff1b9f619",
    "usdt": "0xc2132d05d31c914a87c6611c10748aeb04b58e8f",
    "bnb": "0x3BA4c387f786bFEE076A58914F5Bd38d668B42c3",
    "usdc": "0x2791bca1f2de4661ed88a30c99a7a9449aa84174",
    "busd": "0xdab529f40e671a1d4bf91361c21bf9f0c9712ab7",
    "matic": "0x0000000000000000000000000000000000001010",
    "shib": "0x6f8a06447ff6fcf75d803135a7de15ce88c1d4ec",
    "avax": "0x2C89bbc92BD86F8075d1DEcc58C7F4E0107f286b",
    "dai": "0x8f3cf7ad23cd3cadbd9735aff958023239c6a063",
    "wbtc": "0x1bfd67037b42cf73acf2047067bd4f2c47d9bfd6",
    "uni": "0xb33eaad8d922b1083446dc23f610c2567fb5180f",
    "leo": "0x06d02e9d62a13fc76bb229373fb3bbbd1101d2fc",
    "link": "0x53e0bca35ec356bd5dddfebbd1fc0fd03fabad39",
    "tusd": "0x2e1ad108ff1d8c782fcbbb89aad783ac49586756",
    "ldo": "0xc3c7d422809852031b44ab29eec9f1eff2a58756",
    "cro": "0xada58df0f643d959c2a47c9d4d4c1a4defe3f11c",
    "ape": "0xB7b31a6BC18e48888545CE79e83E06003bE70930",
    "grt": "0x5fe2b58c013d7601147dcdd68c143a77499f5531",
    "pax": "0x6f3b3286fd86d8b47ec737ceb3d0d354cc657b3e",
    "frax": "0x45c32fa6df82ead1e2ef74d17b76547eddfaff89",
    "rndr": "0x61299774020da444af134c82fa83e3810b309991",
    "sand": "0xBbba073C31bF03b8ACf7c28EF0738DeCF3695683",
    "ftm": "0xc9c1c1c20b3658f8787cc2fd702267791f224ce1",
    "aave": "0xd6df932a45c0f255f85145f286ea0b292b21c90b",
    "rpl": "0x7205705771547cf79201111b4bd8aaf29467b9ec",
    "theta": "0xb46e0ae620efd98516f49bb00263317096c114b2",
    "mana": "0xa1c57f48f0deb89f569dfbe6e2b7f46d33606fd4",
    "usdd": "0xffa4d863c96e743a2e1513824ea006b8d0353c57",
    "snx": "0x50b728d8d964fd00c2d0aad81718b71311fef68a",
    "crv": "0x172370d5cd63279efa6d502dab29171933a610af",
    "gusd": "0xc8a94a3d3d2dabc3c1caffffdca6a7543c3e3e65",
    "mkr": "0x6f7C932e7684666C9fd1d44527765433e01fF61d",
    "chz": "0xf1938ce12400f9a761084e7a80d37e732a4da056",
    "paxg": "0x553d3d295e0f695b9228246232edf400ed3560b5",
    "inj": "0x4e8dc2149eac3f3def36b1c281ea466338249371",
    "ht": "0xfad65eb62a97ff5ed91b23afd039956aaca6e93b",
    "fxs": "0x1a3acf6d19267e2d3e7f898f42803e90c9219062",
    "frxeth": "0xee327f889d5947c1dc1934bb208a1e792f953e96",
    "woo": "0x1b815d120b3ef02039ee11dc2d33de7aa4a8c603",
    "nexo": "0x41b3966b4ff7b427969ddf5da3627d6aeae9a48e",
    "lrc": "0x84e1670f61347cdaed56dcc736fb990fbb47ddc1",
    "enj": "0x7ec26842f195c852fa843bb9f6d8b583a274a157",
    "bat": "0x3cef98bb43d732e2f285ee605a8158cde967d219",
    "1inch": "0x9c2c5fd7b07e95ee044ddeba0e97a665f142394f",
    "mask": "0x2b9e7ccdf0f4e5b24757c1e1a80e311e34cb10c7",
    "agix": "0x190eb8a183d22a4bdf278c6791b152228857c033",
    "gno": "0x5ffd62d3c3ee2e81c00a7b9079fb248e7df024a8",
    "hot": "0x0c51f415cf478f8d08c246a6c6ee180c5dc3a012",
    "poly": "0xcb059c5573646047d6d88dddb87b745c18161d3b"
}
export const BSC_TOKENS = {
    "eth": "0x2170ed0880ac9a755fd29b2688956bd959f933f8",
    "bsc-usd": "0x55d398326f99059ff775485246999027b3197955",
    "usdt": "0x55d398326f99059ff775485246999027b3197955",
    "wbnb": "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
    "usdc": "0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d",
    "anyusdc": "0x8965349fb649a33a30cbfda057d8ec2c48abe2a2",
    "xrp": "0x1d2f0da169ceb9fc7b3144628db156f3f6c60dbe",
    "ada": "0x3ee2200efb3400fabb9aacf31297cbdd1d435d47",
    "doge": "0xba2ae424d960c26247dd6c32edc70b295c744c43",
    "matic": "0xcc42724c6683b7e57334c4e856f4c9965ed682bd",
    "trx": "0xce7de646e7208a4ef112cb6ed5038fa6cc6b12e3",
    "dot": "0x7083609fce4d1d8dc0c979aab8c869ea2c873402",
    "ltc": "0x4338665cbb7b2485a8855a139b75d5e34ab0db94",
    "busd": "0xe9e7cea3dedca5984780bafc599bd69add087d56",
    "shib": "0x2859e4544c4bb03966803b044a93563bd2d0dd4d",
    "dai": "0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3",
    "avax": "0x1ce0c2827e2ef14d5c4f29a091d735a204794041",
    "link": "0xf8a0bf9cf54bb92f17374d9e9a321e6a111a51bd",
    "atom": "0x0eb3a705fc54725037cc9e008bdede697f62f335",
    "toncoin": "0x76A797A59Ba2C17726896976B7B3747BfD1d220f",
    "uni": "0xbf5140a22578168fd562dccf235e5d43a02ce9b1",
    "btt": "0x352Cb5E19b12FC216548a2677bD0fce83BaE434B",
    "etc": "0x3d6545b08693dae087e957cb1180ee38b9e3c25e",
    "bch": "0x8ff795a6f4d97e7887c79bea79aba5cc76444adf",
    "tusd": "0x40af3827F39D0EAcBF4A168f8D4ee67c121D11c9",
    "near": "0x1fa4a73a3f0133f0025378af00236f3abdee5d63",
    "btcb": "0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c",
    "usdp": "0xb3c11196a4f3b1da7c23d9fb0a3dde9c6340934f",
    "frax": "0x90c97f71e18723b0cf0dfa30ee176ab653e89f40",
    "egld": "0xbf7c81fff98bbe61b40ed186e4afd6ddd01337fe",
    "ftm": "0xad29abb318791d579433d831ed122afeaf29dcfe",
    "pax": "0xb7f8cd00c5a06c0537e2abff0b58033d02e5e094",
    "eos": "0x56b6fb708fc5732dec1afc8d8556423a2edccbd6",
    "bcfx": "0x045c4324039dA91c52C55DF5D785385Aab073DcF",
    "xtz": "0x16939ef78684453bfdfb47825f8a5f714f12623a",
    "axs": "0x715d400f88c167884bbcc41c5fea407ed4d2f8a0",
    "flow": "0xc943c5320b9c18c153d1e2d12cc3074bebfb31a2",
    "usdd": "0xd17479997F34dd9156Deef8F95A52D81D265be9c",
    "snx": "0x9ac983826058b8a9c7aa1c9171441191232e8404",
    "mkr": "0x5f0da599bb2cccfcf6fdfd7d81743b6020864350",
    "iota": "0xd944f1d1e9d5f9bb90b62f9d45e447d989580782",
    "paxg": "0x7950865a9140cb519342433146ed5b40c6f210f7",
    "zec": "0x1ba42e5193dfa8b03d15dd1b86a3113bbbef8eeb",
    "fxs": "0xe48a3d7d0bc88d552f730b62c006bc925eadb9ee",
    "xec": "0x0ef2e7602add1733bfdb17ac3094d0421b502ca3",
    "maru": "0x08a84af1368cd333073ac5dfb2254208e06b3a70",
    "twt": "0x4b0f1812e5df2a09796481ff14017e6005508003",
    "frxeth": "0x64048a7eecf3a2f1ba9e144aac3d7db6e58f555e",
}
export const ARBITRUM_TOKENS = {
    "usdt": "0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9",
    "usdc": "0xff970a61a04b1ca14834a43f5de4533ebddb5cc8",
    "dai": "0xda10009cbd5d07dd0cecc66161fc93d7c9000da1",
    "wbtc": "0x2f2a2543b76a4166549f7aab2e75bef0aefc5b0f",
    "uni": "0xfa7f8980b0f1e64a2062791cc3b0871572f1f7f0",
    "link": "0xf97f4df75117a78c1a5a0dbb814af92458539fb4",
    "tusd": "0x4d15a3a2286d883af0aa1b3f21367843fac63e07",
    "ldo": "0x13ad51ed4f1b7e9dc168d8a00cb3f4ddd85efa60",
    "arb": "0x912ce59144191c1204e64559fe8253a0e49e6548",
    "grt": "0x9623063377ad1b27544c965ccd7342f7ea7e88c7",
    "frax": "0x17fc002b466eec40dae837fc4be5c67993ddbd6f",
    "usdd": "0x680447595e8b7b3aa1b43beb9f6098c79ac2ab3f",
    "crv": "0x11cdb42b0eb46d95f990bedd4695a6e3fa034978",
    "lunc": "0x1A4dA80967373fd929961e976b4b53ceeC063a15",
    "fxs": "0x9d2f299715d94d8a7e6f5eaa8e654e8c74a988a7",
    "gmx": "0xfc5a1a6eb076a2c7ad06ed22c90d7e710e35ad0a",
    "frxeth": "0x178412e79c25968a32e89b11f63b33f733770c2a",
    "lrc": "0x46d0ce7de6247b0a95f67b43b589b4041bae7fbe",
    "gno": "0xa0b862f60edef4452f25b4160f177db44deb6cf1",
    "comp": "0x354a6da3fcde098f8389cad84b0182725c6c91de",
    "bal": "0x040d1edc9569d4bab2d15287dc5a4f10f56a56b8",
    "yfi": "0x82e3a8f066a6989666b031d916c43672085b1582",
    "sushi": "0xd4d42f0b6def4ce0383636770ef773390d85c61a",
    "gns": "0x18c11FD286C5EC11c3b683Caa813B77f5163A122",
    "lpt": "0x289ba1701c2f088cf0faf8b3705246331cb8a839",
    "uma": "0xd693ec944a85eeca4247ec1c3b130dca9b0c3b22",
    "ustc": "0x13780E6d5696DD91454F6d3BbC2616687fEa43d0",
    "ctsi": "0x319f865b287fcc10b30d8ce6144e8b6d1b476999",
    "stg": "0x6694340fc020c5e6b96567843da2df01b2ce1eb6",
    "joe": "0x371c7ec6d8039ff7933a2aa28eb827ffe1f52f07",
    "syn": "0x080f6aed32fc474dd5717105dba5ea57268f46eb",
    "celr": "0x3a8b787f78d775aecfeea15706d4221b40f345ab",
    "knc": "0xe4dddfe67e7164b0fe14e218d80dc4c08edc01cb",
    "multi": "0x9fb9a33956351cf4fa040f65a13b835a3c8764e3",
    "mim": "0xfea7a6a0b346362bf88a9e4a88416b77a57d6c2a",
    "coti": "0x6fe14d3cc2f7bddffba5cdb3bbe7467dd81ea101",
    "rdnt": "0x3082cc23568ea640225c2467653db90e9250aaa0",
    "pond": "0xda0a57b710768ae17941a9fa33f8b720c8bd9ddd",
    "spell": "0x3e6648c5a70a150a88bce65f4ad4d506fe15d2af",
    "dola": "0x6a7661795c374c0bfc635934efaddff3a7ee23b6",
    "dodo": "0x69eb4fa4a2fbd498c257c57ea8b7655a2559a581",
    "mcb": "0x4e352cf164e64adcbad318c3a1e222e9eba4ce42",
    "susd": "0xa970af1a584579b618be4d69ad6f73459d112f95",
    "badger": "0xbfa641051ba0a0ad1b0acf549a89536a0d76472e",
    "ata": "0xac9ac2c17cdfed4abc80a53c5553388575714d03",
    "fpi": "0x1b01514a2b3cdef16fd3c680a818a0ab97da8a09",
    "fpis": "0x3405e88af759992937b84e58f2fe691ef0eea320",
    "pendle": "0x0c880f6761f1af8d9aa9c466984b80dab9a8c9e8",
    "premia": "0x51fc0f6660482ea73330e414efd7808811a57fa2",
    "mai": "0x3F56e0c36d275367b8C502090EDF38289b3dEa0d",
}
export const OKX_TOKENS = {
    "usdt": "0x382bB369d343125BfB2117af9c149795C6C65C50",
    "usdc": "0xc946DAf81b08146B1C7A8Da2A851Ddf2B3EAaf85",
}

export const WEB3_COMMON_DATAS = {
    "development": {
        "NETWORK": {
            "polygon": {
                "chainId": 80001,
                "rpcUrls": ["https://matic-mumbai.chainstacklabs.com"],
            },
            "bsc": { "chainId": 97, "rpcUrls": NODE_PROVIDER_BSC_TEST },
            "psc": { "chainId": 6999, "rpcUrls": ["https://seed0.PolySmartChain.com"] },
            "opbnb": { "chainId": 5611, "rpcUrls": NODE_PROVIDER_OPBNB_TEST },
        },
        "contract": {
            "polygon": {
                "usdt": "0xbf3aEF85beaB981142bfC718Cc978f36d01004Ee"
            },
            "bsc": {
                "ais": "0xf866Ae6Eb2ca90e5347475CEfB705583B459C2B5",
                "usdt": "0x1CC8A7fbD1f09ebaD54e9a3CA64400C2b9bc9dFa"
            },
            "psc": {
                "usdt": "0xb0D0322C362A847131d5e28De0b8A39DE30745dc",
            },
            "opbnb":{
                "usdt": "0xb0D0322C362A847131d5e28De0b8A39DE30745dc"
            }
        },
        "swap": "0x8eCdf988633f546c24c1B0B944F2D4Ef496cB0f0",
    },
    "production": {
        "NETWORK": {
            "eth": { "chainId": 1, "rpcUrls": NODE_PROVIDER_ETH },
            "polygon": { "chainId": 137, "rpcUrls": NODE_PROVIDER_POLYGON },
            "bsc": { "chainId": 56, "rpcUrls": NODE_PROVIDER_BSC },
            "okx": { "chainId": 66, "rpcUrls": NODE_PROVIDER_OKX },
            "psc": { "chainId": 6999, "rpcUrls": NODE_PROVIDER_PSC },
            "arbitrum": { "chainId": 42161, "rpcUrls": NODE_PROVIDER_ARBITRUM },
        },
        "contract": {
            "eth": ETH_TOKENS,
            "polygon": POLYGON_TOKENS,
            "bsc": BSC_TOKENS,
            "arbitrum": ARBITRUM_TOKENS,
            "okx": OKX_TOKENS,
            "psc": {
                "usdt": {
                    "address": "0x9a00EbF48666227e87bf2E1951823666CD3D474e",
                    "decimals": 18,
                }
            },
        },
    },
}

export const Legend_Contract = {
    "development": {
        "contact": "0x8B5810e9b5e91305a84FC0738D3C8eBb5F24a328",
        "chat": "0xd4000B829Fa965EE08cE3EBE05f4ee2fB3F17972",
        "airdrop": "0xFEC0BfDd723166067eb954e93341Ba5773905509"
    },
    "production": {
    },
}
