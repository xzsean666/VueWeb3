
import { ethers, legendContract, getAccountInternal } from "@/legend/web3Client";
import contactABI from "@/legend/abis/contact.json";
    
type GetFn = "AddFirendPending"|"AgentPool"|"AllReferred"|"caculateRewards"|"getContactList"|"getFirendPending"|"getNextReferred"|"getNote"|"getRefererRight"|"getReferred"|"getReferrer"|"getUserAddress"|"getUserName"|"isAgent"|"isFirend"|"IsFirendPending"|"isRefererRight"|"PendingAgentPosition"|"pendingReferReward"|"PendingRewardPosition"|"Referrer"|"ReferrPool"|"UserName"
type WriteFn = "addContact"|"addFirend"|"addNote"|"addToAgentPool"|"addToReferrPool"|"addUserName"|"approveFirendPending"|"removeFirendPending"|"revokeContact"|"revokeFriend"|"setAgent"|"setRefererRight"|"setReferrer"|"setReferrer"|"settestRefererRight"


export const contactReadAPI = async (getFn: GetFn, ...fnArgs: any[]) => {
    const account = await getAccountInternal()
    const result = await ethers.excuteWriteFunction(contactABI, legendContract["contact"], getFn, account.pk, ...fnArgs)
    return result
}
export const contactWriteAPI = async (writeFn: WriteFn, ...fnArgs: any[]) => {
    const account = await getAccountInternal()
    const result = await ethers.excuteWriteFunction(contactABI, legendContract["contact"], writeFn, account.pk, ...fnArgs)
    return result
}

// Document:
//start---getFn---

//---AddFirendPending---
//input:address _address,uint256 _uint256
//output:address _address,string _message

//---AgentPool---
//input:address _address
//output:uint256 _uint256

//---AllReferred---
//input:address _address,uint256 _uint256
//output:address _address

//---caculateRewards---
//input:address _address,uint256 _amountIn,uint256 _level
//output:uint256 _uint256

//---getContactList---
//input:
//output:address[] _address[]

//---getFirendPending---
//input:
//output:struct Contact.AddFirendMessage[] _struct Contact.AddFirendMessage[]

//---getNextReferred---
//input:address[] _addressArray
//output:address[] _address[]

//---getNote---
//input:address _noteAddress
//output:string _string

//---getRefererRight---
//input:address _address
//output:bool _bool

//---getReferred---
//input:address _address,uint256 _level
//output:struct Contact.ReferredDetail[] _struct Contact.ReferredDetail[],uint256 _uint256

//---getReferrer---
//input:address _address,uint256 _level
//output:struct Contact.ReferrerDetail[] _struct Contact.ReferrerDetail[],uint256 _uint256

//---getUserAddress---
//input:
//output:address _address

//---getUserName---
//input:address _address
//output:string _string

//---isAgent---
//input:address _address
//output:bool _bool

//---isFirend---
//input:address _address
//output:bool _bool

//---IsFirendPending---
//input:address _address,address _address
//output:bool _bool

//---isRefererRight---
//input:address _address
//output:bool _bool

//---PendingAgentPosition---
//input:address _address
//output:uint256 _uint256

//---pendingReferReward---
//input:address _address
//output:uint256 _uint256

//---PendingRewardPosition---
//input:address _address
//output:uint256 _uint256

//---Referrer---
//input:address _address
//output:address _address

//---ReferrPool---
//input:address _address
//output:uint256 _uint256

//---UserName---
//input:address _address
//output:string _string

//start---writeFn---

//---addContact---
//input:address _address
//output:

//---addFirend---
//input:address _address,string _message
//output:

//---addNote---
//input:address _noteAddress,string _note
//output:

//---addToAgentPool---
//input:address _address,uint256 _amount
//output:

//---addToReferrPool---
//input:address _address,uint256 _amount
//output:

//---addUserName---
//input:string _userName
//output:

//---approveFirendPending---
//input:address _address
//output:

//---removeFirendPending---
//input:address _address
//output:

//---revokeContact---
//input:address _address
//output:

//---revokeFriend---
//input:address _address
//output:

//---setAgent---
//input:address _address
//output:

//---setRefererRight---
//input:address _address
//output:

//---setReferrer---
//input:address _referrerAddress
//output:

//---setReferrer---
//input:address _address,address _referrerAddress
//output:

//---settestRefererRight---
//input:
//output:


