import Web3 from 'web3'
declare const window: any
export type TokenParams = {
    "type": string,
    "options": {
        "address": string,
        "symbol": string,
        "decimals": number,
        "image": string,
    },
}
export type EthNetworkParams = {
    chainName: string,
    chainId: string,
    nativeCurrency: {
        name: string,
        decimals: number,
        symbol: string
    },
    rpcUrls: string[],
    blockExplorerUrls: string[]

}
export class Web3WalletUtils {
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

    async changeNetWork(ethNetwork: EthNetworkParams) {
        if (window.ethereum.networkVersion !== ethNetwork.chainId) {
            try {
                await window.ethereum.request({
                    method: 'wallet_switchEthereumChain',
                    params: [{
                        chainId: Web3.utils.toHex(ethNetwork.chainId)
                    }]
                });
            } catch (err: any) {
                // This error code indicates that the chain has not been added to MetaMask
                if (err.code === 4902) {
                    await window.ethereum.request({
                        method: 'wallet_addEthereumChain',
                        params: [ethNetwork]
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
}