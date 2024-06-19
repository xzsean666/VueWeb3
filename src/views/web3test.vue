<template>
    <div>
        web3test
        <br><br>
        <br>
        <button @click="localset">localset</button>
        <button @click="localget">localget</button>
        <button @click="localremove">localremove</button>
        <br><br><br>
        <button @click="web3changeNetWork(80001)">web3changeNetWorkMumbai</button>
        <button @click="web3changeNetWork(6999)">web3changeNetWorkPSC</button>
        <button @click="web3changeNetWork(421613)">web3changeNetWorkARBG</button>
        <br><br><br>
        <button @click="web3GetAccount">web3GetAccount</button>
        <button @click="web3SignMessage">web3SignMessage</button>
        <button @click="web3verifySign">web3verifySign</button>

        <button @click="web3nativeTransfer">web3nativeTransfer</button>
        <button @click="web3ERC20TokenDetails">web3ERC20TokenDetails</button>
        <button @click="web3ERC20TokenTransfer">web3ERC20TokenTransfer</button>
        <button @click="web3ContractTEST">web3ContractTEST</button>

        <br><br><br>
        <button @click="web3ClientnewAccount()">web3ClientnewAccount</button>
        <button @click="web3ClientERC20TokenDetails()">web3ClientERC20TokenDetails</button>
        <button @click="web3ClientnativeTransfer()">web3ClientnativeTransfer</button>
        <button @click="web3ClientERC20TokenTransfer()">web3ClientERC20TokenTransfer</button>

        <br><br><br>
        <button @click="web3ehternewAccount()">web3ehternewAccount</button>

        <button @click="web3ehterERC20TokenDetails()">web3ehterERC20TokenDetails</button>
        <button @click="web3ehternativeTransfer">web3ehternativeTransfer</button>
        <button @click="web3ehtersERC20TokenTransfer">web3ehtersERC20TokenTransfer</button>


    </div>
</template>

<script setup lang="ts">
import web3Utils from "../utils/web3Utils";
import Web3ClientUtils from "@/utils/web3ClientUtils";
import ethersClientUtils from "../utils/web3EthersUtils";

const web3 = new web3Utils()
const web3EthersClientPSC = new ethersClientUtils("https://seed0.polysmartchain.com")
const web3EthersMumbai = new ethersClientUtils("https://polygon-mumbai.blockpi.network/v1/rpc/public")
const web3EthersARB = new ethersClientUtils("https://goerli-rollup.arbitrum.io/rpc")
const web3ClientPSC = new Web3ClientUtils("https://seed0.polysmartchain.com")
const web3ClientMumbai = new Web3ClientUtils("https://polygon-mumbai.blockpi.network/v1/rpc/public")
const web3ClientARB = new Web3ClientUtils("https://goerli-rollup.arbitrum.io/rpc")
const TEST = {
    "address": "0x97E2e098f9c33Df80E991526d99fEDF71657d566",
    "PK": "9f0f2d6e0ae9ce9cbc41c9a28854f43d667d4d2fc9db725272ad12be5288c78c",
    "pscst": "0xb0D0322C362A847131d5e28De0b8A39DE30745dc",
    "mumbaist": "0xe60A4b83BD5e25BF9E7350809ABaedF939bEC709",
    "bscusdt": "0xD021dbE60FA9548F2995881DECD163334A1fAC64",
    "arbst": "0xfb9B071F7981D4364E03a4C761cB30FF5645beD3"
}
const s2 = "0x8eCdf988633f546c24c1B0B944F2D4Ef496cB0f0"


const web3ehternewAccount = () => {
    web3EthersClientPSC.newAccount().then(e => {
        console.log(e);
    })
}
const web3ehterERC20TokenDetails = () => {
    web3EthersClientPSC.ERC20TokenDecimals(TEST.pscst).then(e => {
        console.log(e);
    })
    web3EthersClientPSC.ERC20TokenTotalSuply(TEST.pscst).then(e => {
        console.log(e);
    })
    web3EthersClientPSC.ERC20BalanceOfToken(s2, TEST.pscst).then(e => {
        console.log(e);
    })
    web3EthersClientPSC.ERC20EtherBalanceOfToken(s2, TEST.pscst).then(e => {
        console.log(e);
    })
    web3EthersMumbai.ERC20TokenDecimals(TEST.mumbaist).then(e => {
        console.log(e);
    })
    web3EthersARB.ERC20TokenDecimals(TEST.arbst).then(e => {
        console.log(e);
    })
}
const web3ehternativeTransfer = () => {
    web3EthersClientPSC.nativeTransfer(s2, "0.01", TEST.PK).then(e => {
        console.log(e);
    })
}
const web3ehtersERC20TokenTransfer = () => {
    // web3EthersClientPSC.ERC20TokenTransfer(s2, "6.66", TEST.pscst, TEST.PK).then(e => {
    //     console.log(e);
    // })
    web3EthersMumbai.ERC20TokenTransfer(s2, "6.66", TEST.mumbaist, TEST.PK).then(e => {
        console.log(e);
    })
}

/*-------------------------------------*/

const web3ClientnewAccount = () => {
    web3ClientMumbai.newAccount().then(e => { console.log(e); })
}
const web3ClientERC20TokenDetails = async () => {
    web3ClientMumbai.ERC20TokenDecimals(TEST.mumbaist).then(e => {
        console.log(e);
    })
    const decimals = web3ClientMumbai.ERC20TokenDecimals(TEST.mumbaist)
    const balance = web3ClientMumbai.ERC20EtherBalanceOfToken(TEST.address, TEST.mumbaist)
    const totalSuply = web3ClientMumbai.ERC20TokenTotalSuply(TEST.mumbaist)
    const result = await Promise.all([balance, decimals, totalSuply])

    web3ClientPSC.ERC20TokenDecimals(TEST.pscst).then(e => {
        console.log(e);
    })
    web3ClientARB.ERC20TokenTotalSuply(TEST.arbst).then(e => {
        console.log(e);
    })
    console.log(result);
}
const web3ClientnativeTransfer = () => {
    web3ClientMumbai.nativeTransfer(s2, 0.01, TEST.PK).then(e => {
        console.log(e);
    })
}
const web3ClientERC20TokenTransfer = () => {
    web3ClientMumbai.ERC20TokenTransfer(s2, 6.66, TEST.mumbaist, TEST.PK).then(e => {
        console.log(e);
    })
    //     web3ClientPSC.ERC20TokenTransfer(s2, 6.66, TEST.pscst, TEST.PK).then(e => {
    //         console.log(e);
    //     })
}

/*---------------------------------------------------*/

const web3GetAccount = () => {
    web3.getAccounts().then(e => {
        console.log(e);

    })
}
const web3SignMessage = () => {

    web3.signMessage("helloworld\n666999999999999999").then(e => {
        console.log(e);
    })
}
const web3verifySign = () => {
    web3.verifySign("helloworld\n666999999999999999", "0xb9a0ad5f9d956d2bdc26f464e04f423b6162aa5b6ea5adc5db2f761b8bff03001d815995ff9d2683273e5b2fde52e195487f9ab531139f922d8c6fa2a29087b71c").then(e => {
        console.log(e);

    })
}
const web3changeNetWork = (chainId: number) => {
    web3.changeNetWork(chainId)
}
const web3nativeTransfer = () => {
    web3.nativeTransfer("0x97E2e098f9c33Df80E991526d99fEDF71657d566", 0.0001).then(e => {
        console.log(e);
    })
}
// const testpsccontract = "0xb0D0322C362A847131d5e28De0b8A39DE30745dc"
// const testmumbaicontract = "0xbf3aEF85beaB981142bfC718Cc978f36d01004Ee"
const testarbgcontract = "0xfb9B071F7981D4364E03a4C761cB30FF5645beD3"
const web3ERC20TokenDetails = async () => {
    // let contractAddress = testpsccontract
    // const contractAddress = testmumbaicontract
    const contractAddress = testarbgcontract
    const decimals = web3.ERC20TokenDecimals(contractAddress)
    // console.log(decimals.toString());
    const etherBalance = web3.ERC20EtherBalanceOfToken("0x97E2e098f9c33Df80E991526d99fEDF71657d566", contractAddress)

    const suply = web3.ERC20TokenTotalSuply(contractAddress)
    const balance = web3.ERC20BalanceOfToken("0x97E2e098f9c33Df80E991526d99fEDF71657d566", contractAddress)
    const result = await Promise.all([decimals, suply, balance, etherBalance])
    // console.log(balance);

    console.log(result);

}

const web3ERC20TokenTransfer = async () => {
    const value = (6).toString()
    // const result = await web3mumbai.ERC20TokenTransfer(s2, value, TEST.mumbaist, TEST.PK)
    const result = await web3.ERC20TokenTransfer(s2, value, TEST.arbst)
    console.log(result);
    // web3.test()
    // web3.ERC20TokenTransfer("0x97E2e098f9c33Df80E991526d99fEDF71657d566", 66.66, testarbgcontract).then(e => {
    //     console.log(e);
    // })
}
const TESTCONTRACTABI = [
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "_value",
                "type": "string"
            }
        ],
        "name": "setValue",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getValue",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
]
const TESTAddress = "0x281C31067645ff3Ac82f00c637d3780909CD007B"
const web3ContractTEST = () => {
    web3.excuteWriteFunction(TESTCONTRACTABI, TESTAddress, 'setValue', "666")
}

const localset = () => {
    db.setItem("666", "999")

}
const localget = () => {
    db.getItem("666").then((e: any) => {
        console.log(e);
    })
}
const localremove = () => {
    db.removeItem("666")
}

</script>

<style scoped></style>