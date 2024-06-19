
import { ethers, legendContract, getAccountInternal } from "@/legend/web3Client";
import contactABI from "@/legend/abis/chat.json";
    
type GetFn = "ContactAddress"|"getActiveChat"|"getChatMembers"|"getLoginLog"|"getLoginLog"|"getLoginLog"|"getMessages"|"getSecret"|"getUserAddress"|"isChatBlack"|"isChatFree"|"isChatMember"|"isChatMute"|"isChatOwner"|"isEmptyMessage"|"isJoinAble"|"isNewChat"|"isNewMessages"|"isPrivacy"|"isPublicGroup"
type WriteFn = "createChat"|"createPrivateChat"|"deleteAllMessage"|"deleteChat"|"deleteExpiredMeesages"|"joinChat"|"loginLog"|"removeActiveChat"|"removeChatMember"|"revokeChat"|"revokeChatMember"|"sendMessage"|"setChatBlack"|"setChatFree"|"setChatJoinAble"|"setChatMute"|"setContactAddress"|"setPrivacy"|"updateexpirePeriod"|"updateGroup"


export const contactReadAPI = async (getFn: GetFn, ...fnArgs: any[]) => {
    const account = await getAccountInternal()
    const result = await ethers.excuteWriteFunction(contactABI, legendContract["chat"], getFn, account.pk, ...fnArgs)
    return result
}
export const contactWriteAPI = async (writeFn: WriteFn, ...fnArgs: any[]) => {
    const account = await getAccountInternal()
    const result = await ethers.excuteWriteFunction(contactABI, legendContract["chat"], writeFn, account.pk, ...fnArgs)
    return result
}

// Document:
//start---getFn---

//---ContactAddress---
//input:
//output:address _address

//---getActiveChat---
//input:
//output:uint256[] _uint256[]

//---getChatMembers---
//input:uint256 _chatID
//output:address[] _address[]

//---getLoginLog---
//input:address _address
//output:uint256[] _uint256[]

//---getLoginLog---
//input:address _address,uint256 _startIndex
//output:uint256[] _uint256[]

//---getLoginLog---
//input:address _address,uint256 _startIndex,uint256 _endIndex
//output:uint256[] _uint256[]

//---getMessages---
//input:uint256 _chatID,uint256 _startIndex
//output:struct Chat.Message[] _struct Chat.Message[]

//---getSecret---
//input:uint256 _chatID
//output:string _string

//---getUserAddress---
//input:
//output:address _address

//---isChatBlack---
//input:address _address,uint256 _uint256
//output:bool _bool

//---isChatFree---
//input:address _address,uint256 _uint256
//output:bool _bool

//---isChatMember---
//input:address _address,uint256 _uint256
//output:bool _bool

//---isChatMute---
//input:uint256 _uint256
//output:bool _bool

//---isChatOwner---
//input:uint256 _chatID
//output:bool _bool

//---isEmptyMessage---
//input:uint256 _messageID
//output:bool _bool

//---isJoinAble---
//input:uint256 _uint256
//output:bool _bool

//---isNewChat---
//input:uint256 _chatID
//output:bool _bool

//---isNewMessages---
//input:uint256 _chatID,uint256 _updateIndex
//output:bool _bool

//---isPrivacy---
//input:address _address
//output:bool _bool

//---isPublicGroup---
//input:uint256 _chatID
//output:bool _bool

//start---writeFn---

//---createChat---
//input:address[] _chatMembers,string _secret,bool _isPublic,uint256 _expirePeriod
//output:

//---createPrivateChat---
//input:address _address,string _secret,uint256 _expirePeriod
//output:

//---deleteAllMessage---
//input:uint256 _chatID
//output:

//---deleteChat---
//input:uint256 _chatID
//output:

//---deleteExpiredMeesages---
//input:uint256 _chatID
//output:

//---joinChat---
//input:uint256 _chatID
//output:

//---loginLog---
//input:
//output:

//---removeActiveChat---
//input:uint256 _chatID,address _userAddress
//output:

//---removeChatMember---
//input:uint256 _chatID,address _userAddress
//output:

//---revokeChat---
//input:uint256 _chatID
//output:

//---revokeChatMember---
//input:uint256 _chatID,address _userAddress
//output:

//---sendMessage---
//input:uint256 _chatID,string _encryptMessage
//output:

//---setChatBlack---
//input:uint256 _chatID,address _address,bool _status
//output:

//---setChatFree---
//input:uint256 _chatID,address _address,bool _status
//output:

//---setChatJoinAble---
//input:uint256 _chatID,bool _status
//output:

//---setChatMute---
//input:uint256 _chatID,bool _status
//output:

//---setContactAddress---
//input:address _address
//output:

//---setPrivacy---
//input:bool _status
//output:

//---updateexpirePeriod---
//input:uint256 _chatID,uint256 _expirePeriod
//output:

//---updateGroup---
//input:uint256 _chatID,string _chatName,string _chatIconURL
//output:


