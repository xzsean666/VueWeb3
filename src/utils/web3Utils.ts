import Web3 from 'web3'


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
const ethNetwork: any = {
    "56": {
        chainName: 'Binance Smart Chain Mainnet',
        chainId: Web3.utils.toHex(56),
        nativeCurrency: {
            name: 'BNB',
            decimals: 18,
            symbol: 'BNB'
        },
        rpcUrls: ['https://bsc-dataseed1.binance.org'],
        blockExplorerUrls: ['https://bscscan.com']

    },
    "97": {

        chainName: 'Binance Smart Chain Testnet',
        chainId: Web3.utils.toHex(97),
        nativeCurrency: {
            name: 'tBNB',
            decimals: 18,
            symbol: 'tBNB'
        },
        rpcUrls: ['https://bsc-testnet.public.blastapi.io'],
        blockExplorerUrls: ['https://testnet.bscscan.com']

    },
    "137": {

        chainName: 'Polygon Mainnet',
        chainId: Web3.utils.toHex(137),
        nativeCurrency: {
            name: 'MATIC',
            decimals: 18,
            symbol: 'MATIC'
        },
        rpcUrls: ['https://polygon-rpc.com/'],
        blockExplorerUrls: ['https://polygonscan.com']

    },
    "6999": {

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
    "80001": {
        chainName: 'Polygon Mumbai',
        chainId: Web3.utils.toHex(80001),
        nativeCurrency: {
            name: 'MATIC',
            decimals: 18,
            symbol: 'MATIC'
        },
        rpcUrls: ['https://rpc.ankr.com/polygon_mumbai'],
        blockExplorerUrls: ['https://mumbai.polygonscan.com']
    }
    ,
    "421613": {
        chainName: 'Arbitrum Goerli Testnet',
        chainId: Web3.utils.toHex(421613),
        nativeCurrency: {
            name: 'ETH',
            decimals: 18,
            symbol: 'ETH'
        },
        rpcUrls: ['https://goerli-rollup.arbitrum.io/rpc'],
        blockExplorerUrls: ['https://goerli.arbiscan.io/']
    }


}
declare const window: any
type TokenParams = {
    "type": string,
    "options": {
        "address": string,
        "symbol": string,
        "decimals": number,
        "image": string,
    },
}
class Web3Utils {
    web3!: Web3
    account!: string

    constructor() {
        this.createWeb3().then((result) => {
            if (result instanceof (Web3)) {
                this.web3 = new Web3(result)
            }
        })
        window.ethereum.on('accountsChanged', (accounts: Array<string>) => {
            // console.log(accounts);
            this.account = accounts[0]
        });
        window.ethereum.on('chainChanged', () => {
            window.location.reload()
        });

    }
    async createWeb3() {
        if (window.ethereum) {
            const web3 = new Web3(window.ethereum);
            return web3
        } else if (window.web3) {
            const web3 = new Web3(window.web3.currentProvider);
            return web3
        }
    }

    async signMessage(message: string) {
        const account = await this.getAccounts();
        try {
            const from = account;
            // For historical reasons, you must submit the message to sign in hex-encoded UTF-8.
            // This uses a Node.js-style buffer shim in the browser.
            const sign = await window.ethereum.request({
                method: 'personal_sign',
                params: [this.web3.utils.toHex(message), from],
            });
            return sign
        } catch (err) {
            return `Error: ${err}`
        }
        // const signature = await this.web3.eth.personal.sign(message, account);
    }
    async verifySign(message: string, signature: string) {
        return this.web3.eth.personal.ecRecover(message, signature)
    }

    async changeNetWork(chainId: number) {
        if (window.ethereum.networkVersion !== chainId) {
            try {
                await window.ethereum.request({
                    method: 'wallet_switchEthereumChain',
                    params: [{
                        chainId: Web3.utils.toHex(chainId)
                    }]
                });
            } catch (err: any) {
                // This error code indicates that the chain has not been added to MetaMask
                if (err.code === 4902) {
                    await window.ethereum.request({
                        method: 'wallet_addEthereumChain',
                        params: [ethNetwork[chainId]]
                    });
                }
            }
        }
    }
    async addToken(tokenParams: TokenParams) {
        window.ethereum
            .request({
                method: 'wallet_watchAsset',
                params: tokenParams,
            })
            .then((success: any) => {
                if (success) {
                    console.log(tokenParams["options"]["symbol"] + 'successfully added to wallet!');
                } else {
                    throw new Error('Something went wrong.');
                }
            })
            .catch(console.error);
    }

    async getAccounts() {
        const accounts = await window.ethereum.request({
            method: 'eth_requestAccounts'
        });
        this.account = accounts[0];
        return this.account
    }

    async getChainId() {
        const chainId = await window.ethereum.request({ method: 'eth_chainId' });
        return chainId
    }

    async createCT(contractAbi: Array<any>, contractAddress: string) {
        // const web3 = await this.getWeb3()
        try {
            const contract = new this.web3.eth.Contract(contractAbi, contractAddress)
            // console.log(contract);
            return contract
        } catch (err) {
            console.log(err);
        }
    }
    async nativeTransfer(toAddress: string, valueEther: number) {
        const fromAddress = await this.getAccounts()
        const result = await this.web3.eth.sendTransaction({
            from: fromAddress,
            to: toAddress,
            value: this.web3.utils.toWei(valueEther, "ether"),
        }).on('receipt', (receipt: any) => {
            return receipt
        })
        return result
    }
    async excuteReadFunction(contractAbi: Array<any>, contractAddress: string, fnName: string, ...fnArgs: any[]) {
        const ct = await this.createCT(contractAbi, contractAddress)
        const result = await eval("ct.methods." + fnName)(...fnArgs).call()
        return result
    }
    async excuteWriteFunction(contractAbi: any[], contractAddress: string, fnName: string, ...fnArgs: any[]) {
        const ct = await this.createCT(contractAbi, contractAddress)
        const fromAddress = await this.getAccounts()
        const encodeData = await eval("ct.methods." + fnName)(...fnArgs).encodeABI();
        const transactionHash = await window.ethereum.request({
            method: 'eth_sendTransaction',
            params: [
                {
                    to: contractAddress,
                    from: fromAddress,
                    data: encodeData.startsWith('0x') ? encodeData : '0x' + encodeData,
                },
            ],
        });
        return transactionHash
    }


    async ERC20TokenDecimals(contractAddress: string) {
        const result = await this.excuteReadFunction(ERC20ABI, contractAddress, 'decimals')
        return result
    }

    async ERC20TokenTotalSuply(contractAddress: string) {
        const result = await this.excuteReadFunction(ERC20ABI, contractAddress, 'totalSupply')
        return result
    }
    async ERC20BalanceOfToken(address: string, contractAddress: string) {
        const result = await this.excuteReadFunction(ERC20ABI, contractAddress, 'balanceOf', address)
        return result
    }
    async ERC20EtherBalanceOfToken(address: string, contractAddress: string) {
        const decimals = this.ERC20TokenDecimals(contractAddress)
        const balanceOfWei = this.excuteReadFunction(ERC20ABI, contractAddress, 'balanceOf', address)
        const result = await Promise.all([decimals, balanceOfWei])
        const balanceOfEther = Number(result[1]) / 10 ** Number(result[0])
        return balanceOfEther
    }

    async ERC20TokenTransfer(toAddress: string, valueEther: string, contractAddress: string) {
        const decimals = await this.ERC20TokenDecimals(contractAddress)
        const valueWei = Web3.utils.toWei(valueEther, decimalsMap[(10 ** Number(decimals))])
        // console.log(toAddress, valueEther, contractAddress, valueWei);
        const result = await this.excuteWriteFunction(ERC20ABI, contractAddress, "transfer", toAddress, valueWei)
        return result
    }

    async test() {
        // const result = await this.excuteWriteFunction(ERC20ABI, "0xfb9B071F7981D4364E03a4C761cB30FF5645beD3", "transfer", "0x97E2e098f9c33Df80E991526d99fEDF71657d566", "666000000000000000")
        const result = await this.excuteWriteFunction(ERC20ABI, "0xfb9B071F7981D4364E03a4C761cB30FF5645beD3", "approve", "0x97E2e098f9c33Df80E991526d99fEDF71657d566", "666000000000000000")
        console.log(result);
    }

}
export default Web3Utils
