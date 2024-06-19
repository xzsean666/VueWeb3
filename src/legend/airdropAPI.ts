
import { ethers, legendContract, getAccountInternal } from "@/legend/web3Client";
import contactABI from "@/legend/abis/airdrop.json";
    
type GetFn = "AirDropAssignAddress"|"AirDropCurrentAmount"|"AirDropNumbers"|"AirDropWinner"|"caculateAirDropAmount"|"getAirDropSecret"|"getAirDropWinner"|"getNewAirDrop"|"getUserAddress"|"getValidTokens"|"isAirDropAssignAddress"|"isGetAirDrop"|"isValidTokens"|"test"|"ValidTokens"
type WriteFn = "addAirDrop"|"addAirDropAssignAddress"|"addValidTokens"|"getAirDrop"|"revokeAirDropByOwnner"|"revokeValidTokens"|"setChatAddress"|"transferToContract"


export const contactReadAPI = async (getFn: GetFn, ...fnArgs: any[]) => {
    const account = await getAccountInternal()
    const result = await ethers.excuteWriteFunction(contactABI, legendContract["airdrop"], getFn, account.pk, ...fnArgs)
    return result
}
export const contactWriteAPI = async (writeFn: WriteFn, ...fnArgs: any[]) => {
    const account = await getAccountInternal()
    const result = await ethers.excuteWriteFunction(contactABI, legendContract["airdrop"], writeFn, account.pk, ...fnArgs)
    return result
}

// Document:
//start---getFn---

//---AirDropAssignAddress---
//input:uint256 _uint256,uint256 _uint256
//output:address _address

//---AirDropCurrentAmount---
//input:uint256 _uint256
//output:uint256 _uint256

//---AirDropNumbers---
//input:uint256 _uint256
//output:uint256 _uint256

//---AirDropWinner---
//input:uint256 _uint256,uint256 _uint256
//output:address winnerAddress,uint256 amount

//---caculateAirDropAmount---
//input:uint256 _airDropID
//output:uint256 _uint256

//---getAirDropSecret---
//input:uint256 _airDropID
//output:string _string

//---getAirDropWinner---
//input:uint256 _airDropID
//output:struct AirDrop.Winner[] _struct AirDrop.Winner[]

//---getNewAirDrop---
//input:
//output:uint256[] _uint256[]

//---getUserAddress---
//input:
//output:address _address

//---getValidTokens---
//input:
//output:struct AirDrop.TokenDetails[] _struct AirDrop.TokenDetails[]

//---isAirDropAssignAddress---
//input:address _address,uint256 _airDropID
//output:bool _bool

//---isGetAirDrop---
//input:address _address
//output:bool _bool

//---isValidTokens---
//input:address _address
//output:bool _bool

//---test---
//input:uint256 _airDropID
//output:uint256 _uint256

//---ValidTokens---
//input:uint256 _uint256
//output:address _address

//start---writeFn---

//---addAirDrop---
//input:address _tokenAddress,uint256 _valueWei,uint256 _airDropNumbers,bool _isRandom
//output:uint256 _uint256

//---addAirDropAssignAddress---
//input:address _tokenAddress,uint256 _valueWei,bool _isRandom,address[] _assignAddresses
//output:uint256 _uint256

//---addValidTokens---
//input:address _address
//output:

//---getAirDrop---
//input:uint256 _airDropID,string _secret
//output:

//---revokeAirDropByOwnner---
//input:uint256 _airDropID
//output:

//---revokeValidTokens---
//input:address _address
//output:

//---setChatAddress---
//input:address _address
//output:

//---transferToContract---
//input:address _tokenAddress,uint256 _valueWei
//output:bool _bool


