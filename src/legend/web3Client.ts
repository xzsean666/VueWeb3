import web3EthersUtils from "@/utils/web3EthersUtils";
import web3Client from "@/utils/web3Utils";
import { WEB3_COMMON_DATAS, Legend_Contract } from "@/utils/web3CommonData";
import { CryptoUtils } from "@/utils/cryptoUtils";

const ENVIORMENT = "development"
// const ENVIORMENT = "production"
const NODE_PROVIDER = await db.getItem("NODE_PROVIDER")
export const KEY_ACCOUNT = "ACCOUNT"
export const KEY_PASSWORD_ACCOUNT = "GAS_PASSWORD"
export const web3CommonData = WEB3_COMMON_DATAS[ENVIORMENT]
export const legendContract = Legend_Contract[ENVIORMENT]

// implements IAPIResponse 
export class APIResponse {
    code: number | undefined = 200
    data: any = null
    message: string | undefined = "success"
}
export const getResponse = (data: any, code?: number, message?: string) => {
    const response = new APIResponse()
    code ? response.code = code : response.code = 200
    response.data = data
    message ? response.message = message : response.message = "success request!"
    return response
}
export const getEthers = (NODE_PROVIDER: string) => {
    return new web3EthersUtils(NODE_PROVIDER)
}
export const getAccountInternal = async () => {
    const password = sessionStorage.getItem(KEY_PASSWORD_ACCOUNT)
    const data = await db.getItem(KEY_ACCOUNT)
    if (!data || !password) {
        return undefined
    }
    const cu = new CryptoUtils(password)
    const account: any = cu.jwtDecode(data)
    // console.log(account);
    if (!account) {
        return undefined
    }
    return account
}

export const ethers = new web3EthersUtils(NODE_PROVIDER)
export const web3Wallet = new web3Client()



