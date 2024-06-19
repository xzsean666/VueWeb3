<template>
    <div>
        BTCTEST
        <br><br><br>
        <button @click="bitcoinrandomKey">bitcoinrandomKey</button>
        <button @click="bitcoinparsePrivateKey">bitcoinparsePrivateKey</button>
        <button @click="bitcoinnewHDAccount">bitcoinnewHDAccount</button>
        <button @click="bitcoinparseHDPrivateKey">bitcoinparseHDPrivateKey</button>
        <button @click="bitcoinbuildRawTransaction">bitcoinbuildRawTransaction</button>

        <!-- parseHDPrivateKey -->


        <br><br><br>
        <br><br><br>
        <br><br><br>
        <button @click="btccreateWallet">btccreateWallet</button>
        <button @click="btccreateHDWallet">btccreateHDWallet</button>
        <button @click="btcgetDetails">btcgetDetails</button>
        <button @click="btcbuildTransaction">btcbuildTransaction</button>
        <button @click="btcsendBitcoin">btcsendBitcoin</button>

    </div>
</template>

<script setup lang="ts">
import btcUtils from "../utils/btcUtils";
import { BitcoinUtils, mempoolAPI } from "../utils/BitcoinUtils";


const btcnet = "testnet"
const bitcoin = new BitcoinUtils(btcnet)
const btc = new btcUtils(btcnet)
const mempool = new mempoolAPI(btcnet)
const TEST = {
    "privateKey": "37932363bc199f4929cce374a00daf34632ad2a229873edb2d7b9c7c635d3ab6",
    "address": "miZ2GiCoMxBw8scs8YMZMRgzuNX28okccm"
}
const TEST0 = {
    "privateKey": "37932363bc199f4929cce374a00daf34632ad2a229873edb2d7b9c7c635d3ab6",
    "address": "miZ2GiCoMxBw8scs8YMZMRgzuNX28okccm",
    'wif': 'cPSjPiuhYeTUcuhtmxs8itveabegEjkT1k1z7VLSLCnBKN9UZWNv',
    'segwitAddress': 'tb1qy9xgw66x7plvz3d0pqvmzfknzjhut9ga24jf7u'
}
const TEST1 = {
    "privateKey": "c67bde1a7ecd16a26262eda3247dc123e30e8c28cb8acb48e7406858c322e299",
    "address": "my4jnfY4Bmft5hCHJhwapuqQEZZ2W3u9C3"
}

const TEST2 = {
    "index": 0,
    "xwif": "cVHFRm3M5Tphvyf1p5UBqu8imvRwaDJqfsaBQkYZvshBaqkvCJsg",
    "xprivateKey": "tprv8ZgxMBicQKsPdZDg2GZJ3diBFgnhRR8HfUThtDqAsAXS58z7RxzWKfRezjpnShpUqbczEcUyY4ptNj1td4KCcqsYDeff3oH8bQUWm6gjZ7q",
    "xpublicKey": "tpubD6NzVbkrYhZ4X2FTuvDtT3NHpiJdakKCEn4VAjsUHSKpudEt4Mp6WA3XAqL3rfpDgiC99QAToakXkNhF4j6EYSvF6RuYK8UB9GR4ZvMyUVe",
    "account": {
        "wif": "L2PcDhNy2JByyB2zz7iErZfgyAiBQHxadgL7bQ3TK1his9efeaPP",
        "privateKey": "9a4748e0d4929cd7dc3d57e6f90ea42b1ea5a34ca41766ceff7e291af47591d8",
        "publicKey": "0222bfed705d6ac33a0fcba8471b4ed0593960d57a35c9ffa5b2a63612c3dc0a8b",
        "address": "mwME52QUg7qproVFS7AmxujqHJ4S8RAuzq",
        "segwitAddress": "tb1q4k4stqcuefw9c0thamjxkzlrn0dhvzt2z6cka8",
        "segwitAddressP2SH": "2NBz5FNjXt1ErfWLkGVXVeGNPZQrYcjHHZC"
    },
    "mnemonic": "monkey typical funny mesh february what cinnamon regular invest latin little reform"
}
const bitcoinrandomKey = () => {
    bitcoin.newAccount().then(e => {
        console.log(e);
    })
}
const bitcoinparsePrivateKey = () => {
    // eth PK
    // 9f0f2d6e0ae9ce9cbc41c9a28854f43d667d4d2fc9db725272ad12be5288c78c
    // btc PK
    // 921eec226d4b3369098435334051c1f584703a196de4620e1ee7660d7e2259a3
    bitcoin.parsePrivateKey("9f0f2d6e0ae9ce9cbc41c9a28854f43d667d4d2fc9db725272ad12be5288c78c").then(e => {
        console.log(e);
    })
}
const bitcoinnewHDAccount = () => {
    bitcoin.newHDAccount().then(e => {
        console.log(e);
    })
}
const bitcoinparseHDPrivateKey = () => {
    bitcoin.mnemonicToxprivateKey(TEST2.mnemonic).then(e => {
        console.log(e);
    })
    bitcoin.parseHDPrivateKey(TEST2.xprivateKey, 1).then(e => {
        console.log(e);
    })
}
const bitcoinbuildRawTransaction = async () => {
    // const mempoolData1 = await mempool.getTransactions("5a7f47af2aaec94df499340472efe5d7217db948ff0bbb393de576cd745abbed", "getTxHex")
    // console.log(mempoolData1);
    // const mempoolData = await mempool.getBalance(TEST0.segwitAddress)
    // console.log(mempoolData);
    // const mempoolData1 = await mempool.getFees()
    // console.log(mempoolData1);

    // res = await bitcoin.buildRawTxMempool(TEST1.address, 0.0005, TEST0.privateKey, false)
    const res = await bitcoin.buildRawTxMempool(TEST1.address, 0.0005, TEST0.privateKey)
    console.log(res);
    const res1 = await bitcoin.buildRawTxMempool(TEST1.address, 0.0005, TEST0.privateKey, false)
    // const result = await Promise.all([res, res1])
    console.log(res1);

    // bitcoin.buildRawTransaction(
    //     TEST1.address,
    //     66666,
    //     TEST0.segwitAddress,
    //     TEST0.privateKey,
    //     mempoolData.utxos,
    //     mempoolData.feeVbyte,
    //     false
    // ).then(e => {
    //     console.log(e);
    // })

    // bitcoin.buildSegwitRawTransaction(
    //     TEST1.address,
    //     66666,
    //     TEST0.segwitAddress,
    //     TEST0.privateKey,
    //     mempoolData.utxos,
    //     mempoolData.feeVbyte
    // ).then(e => {
    //     console.log(e);
    // })


}



const btccreateWallet = () => {
    btc.createWallet().then(e => {
        console.log(e);
    })
}
const btccreateHDWallet = () => {
    btc.createHDWallet().then(e => {
        console.log(e);
    })
}
const btcgetDetails = () => {
    btc.getAddress(TEST.address, "getAddress").then(e => {
        console.log(e);
    })
    btc.getAddress(TEST1.address, "getAddress").then(e => {
        console.log(e);
    })
    btc.getAddress(TEST2.address, "getAddress").then(e => {
        console.log(e);
    })
    // btc.getAddress(TEST.address, "getAddressTxsUtxo").then(e => {
    //     console.log(e);
    // })
}
const btcbuildTransaction = () => {
    btc.buildTransaction(TEST1.address, 0.0005, TEST0.segwitAddress, TEST0.privateKey).then(e => {
        console.log(e);
    })
}
const btcsendBitcoin = () => {
    btc.sendBitcoin(TEST1.address, 0.0001, TEST.address, TEST.privateKey).then(e => {
        console.log(e);
    })
}
</script>

<style scoped></style>