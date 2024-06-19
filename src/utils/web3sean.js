
// import Web3 from 'web3'

if (typeof window.ethereum !== 'undefined') {
    console.log('MetaMask is installed!');
}
const Web3 = window.Web3;
async function getChainId() {
    // 0x13881 mumbai
    return window.ethereum.chainId
   
}


async function createWeb3() {
    if (window.ethereum) {
        const Web3 = window.Web3;
        const web3 = new Web3(window.ethereum);
        return web3
    } else if (window.web3) {
        const Web3 = window.Web3;
        const web3 = new Web3(window.web3.currentProvider);
        return web3
    } else {
        console.log(
            "Non-Ethereum browser detected. You should consider trying MetaMask!"
        );
        return null
    }
}
async function getAccountAddress() {
    if (window.ethereum) {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        return accounts[0]
    } else if (window.web3) {
        const Web3 = window.Web3;
        const web3 = new Web3(window.web3.currentProvider);
        const accounts = await web3.eth.getAccounts()
        return accounts[0]
    } else {
        console.log(
            "Non-Ethereum browser detected. You should consider trying MetaMask!"
        );
        return null
    }

}
async function createContractOBJ(abi, contract) {
    const web3 = await createWeb3()
    const ct = new web3.eth.Contract(abi, contract);
    return ct
}

async function getBlanceof(account, abi, contract) {
    const ct = await createContractOBJ(abi, contract)
    const balance_wei = await ct.methods.balanceOf(account).call()
    const balance = Web3.utils.fromWei(balance_wei, "ether")
    return balance
}


function modify_receipt(receipt) {
    const Web3 = window.Web3;
    const result = {}
    result["chainId"] = window.Web3.utils.hexToNumber(window.ethereum.chainId)
    result["transactionHash"] = receipt.transactionHash
    result["from"] = receipt.events.Transfer.returnValues.from
    result["to"] = receipt.events.Transfer.returnValues.to
    result["value_ether"] = Web3.utils.fromWei(receipt.events.Transfer.returnValues.value, "ether")
    result["date"] = new Date()
    return result
}
async function sendToken(abi, contract, fromaddress, toaddress, value_ether) {
    const Web3 = window.Web3;
    const ct = await createContractOBJ(abi, contract)
    try {
        const receipt = await ct.methods.transfer(toaddress, Web3.utils.toWei(value_ether)).send({ 'from': fromaddress }).on('receipt', (receipt) => { return receipt })
        const result = {}
        // console.log(receipt)
        result["receipt"] = modify_receipt(receipt);
        localStorage.setItem("last_transaction", result)
        // console.log(result)
        return result
    } catch (error) {
        console.log(error);
        return null
    }
}


export default {
    getAccountAddress:getAccountAddress,
    createWeb3:createWeb3,
    sendToken:sendToken,
    getChainId:getChainId,
    getBlanceof:getBlanceof,

}