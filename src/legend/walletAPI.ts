import { getEthers, ethers, getResponse, web3CommonData, KEY_PASSWORD_ACCOUNT, KEY_ACCOUNT } from "@/legend/web3Client";
import { CryptoUtils } from "@/utils/cryptoUtils";


type AccountType = {
    address?: string
    pk?: string
    mnemonic?: any
}

export const getNodeProviderListWithLatency = async () => {
    const rpcList = web3CommonData["NETWORK"]["opbnb"]["rpcUrls"]
    console.log(rpcList);
    const allTask = []
    for (const rpc of rpcList) {
        allTask.push(latencyOfRPC(rpc))
    }
    const result = await Promise.all(allTask)
    // console.log(result);
    return getResponse(result)
    // return 
}
const latencyOfRPC = async (NODE_PROVIDER: string) => {
    const currentEthers = getEthers(NODE_PROVIDER)
    try {
        const result = await currentEthers.latencyOfRPC()
        return result
    } catch {
        currentEthers.web3.destroy()
        const result = {
            rpcURL: NODE_PROVIDER,
            currentBlockNumber: undefined,
            latency: 0
        }
        return result
    }
}

export const getLatencyOfRPC = async (NODE_PROVIDER: string) => {
    // const currentEthers = getEthers(NODE_PROVIDER)
    // const result = await currentEthers.latencyOfRPC()
    const result = await latencyOfRPC(NODE_PROVIDER)
    return getResponse(result)
}
export const getNodeProviderList = async () => {
    return getResponse(web3CommonData["NETWORK"]["opbnb"])
}
export const setNodeProvider = async (NODE_PROVIDER: string) => {
    await db.setItem("NODE_PROVIDER", NODE_PROVIDER)
    return getResponse(true)
}
export const getCurrentNodeProvider = async () => {
    const data = await db.getItem("NODE_PROVIDER")
    const result = await latencyOfRPC(data)
    return getResponse(result)
}
// export const getAccount = async () => {
//     const data = await web3Wallet.getAccounts()
//     return getResponse(data)
// }
const getNewAccount = async () => {
    const newAccountWallet = await ethers.newAccount()
    // if (!newAccountWallet) {
    //     return false
    // }
    const newAccount = {
        address: newAccountWallet?.address,
        pk: newAccountWallet?.privateKey,
        mnemonic: newAccountWallet?.mnemonic
    }
    return newAccount
}


export const setPassWord = async (password: string, account?: AccountType) => {

    const accountDB = await db.getItem(KEY_ACCOUNT)
    if (accountDB) {
        return getResponse(false, 400, "you already have a gas account!")
    }
    if (!account) {
        const newAccount = await getNewAccount()
        account = {
            address: newAccount["address"],
            pk: newAccount["pk"],
            mnemonic: newAccount["mnemonic"]
        }
    }
    const cu = new CryptoUtils(password)
    const encodeAccount = cu.jwtEncode(account)
    const result = await db.setItem(KEY_ACCOUNT, encodeAccount)
    return getResponse(result)
}
export const deleteAccount = async (password: string) => {
    const response = await getAccount(password)
    if (response.code != 200) {
        return response
    }
    const result = await db.removeItem(KEY_ACCOUNT)
    return getResponse(result)
}
export const getAccount = async (password: string) => {
    const data = await db.getItem(KEY_ACCOUNT)
    if (!data) {
        return getResponse(false, 404, "you need register a gas account first!")
    }
    const cu = new CryptoUtils(password)
    const account = cu.jwtDecode(data)
    // console.log(account);
    if (!account) {
        return getResponse(false, 401, "Unauthorized!")
    }
    return getResponse(account)
}
export const getAccountInternal = async () => {
    let password = sessionStorage.getItem(KEY_PASSWORD_ACCOUNT)
    password = password ? password : ""
    const data = await db.getItem(KEY_ACCOUNT)
    if (!data) {
        return getResponse(false, 404, "you need register a gas account first!")
    }
    const cu = new CryptoUtils(password)
    const account = cu.jwtDecode(data)
    // console.log(account);
    if (!account) {
        return getResponse(false, 401, "Unauthorized!")
    }
    return getResponse(account)
}
export const getAccountAccess = async (password: string) => {
    const data = await db.getItem(KEY_ACCOUNT)
    if (!data) {
        return false
    }
    const cu = new CryptoUtils(password)
    const account = cu.jwtDecode(data)
    // console.log(account);
    if (!account) {
        return false
    }
    return true
}
export const importAccount = async (password: string, address: string, pk: string) => {
    return setPassWord(password, { address: address, pk: pk })
}
export const importAccountPK = async (password: string, pk: string) => {
    const wallet = await ethers.phraseWallet(pk)
    return setPassWord(password, wallet)
}
export const importAccountMnemonic = async (password: string, mnemonic: string) => {
    const wallet = await ethers.phraseWalletMnemonic(mnemonic)
    return setPassWord(password, wallet)
}
export const newAccount = async (password: string) => {
    return setPassWord(password)
}
export const login = async (password: string) => {
    const access = await getAccountAccess(password)
    if (access) {
        sessionStorage.setItem(KEY_PASSWORD_ACCOUNT, password)
        return getResponse(true)
    } else {
        return getResponse(false, 401, "Unauthorized!")
    }

}

export const createAccount = () => {
    const temp = {
        a: 666,
        b: "sdfds"
    }
    const cu = new CryptoUtils()
    console.log(cu);

    const res = cu.jwtEncode(temp)
    console.log(res);

    const res1 = cu.jwtDecode(res)
    console.log(res1);
}