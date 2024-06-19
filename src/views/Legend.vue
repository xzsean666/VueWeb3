<template>
    <div>
        <p>inputa:</p>
        <input type="text" v-model="inputtest.a">
        <p>inputb:</p>
        <input type="text" v-model="inputtest.b">
        <p>inputc:</p>
        <input type="text" v-model="inputtest.c">
        <br>
        <p>contactAPI相关</p>
        <button @click="getAccount">getAccount</button>
        <button @click="getAccount">getAccount</button>
        <button @click="getAccount">getAccount</button>
        <button @click="contactReadAPI">contactReadAPI</button>

        <br>
        <p>钱包相关</p>
        <button @click="importAccountMnemonic">importAccountMnemonic</button>
        <button @click="importAccountPK">importAccountPK</button>
        <button @click="getAccountInternal">getAccountInternal</button>
        <button @click="getNodeProviderList">getNodeProviderList</button>
        <button @click="setNodeProvider">setNodeProvider</button>
        <button @click="getNodeProvider">getNodeProvider</button>
        <button @click="setPassWord">setPassWord</button>
        <button @click="newAccount">newAccount</button>
        <button @click="importAccount">importAccount</button>
        <button @click="deleteAccount">deleteAccount</button>
        <button @click="getAccount">getAccount</button>
        <button @click="getLatencyOfRPC">getLatencyOfRPC</button>
        <button @click="getNodeProviderListWithLatency">getNodeProviderListWithLatency</button>
        <button @click="login">login</button>
        <button @click="getAccount">getAccount</button>


    </div>
</template>

<script setup lang="ts">
import * as wallet from "@/legend/walletAPI";
import * as contact from "@/legend/contactAPI";
const inputtest = reactive({
    a: "",
    b: "",
    c: "",
})
// start contactapi
const contactReadAPI = async () => {
    const result = await contact.contactReadAPI("getFirendPending")
    console.log(result);
}

// start walletapi
const importAccountMnemonic = async () => {
    const result = await wallet.importAccountMnemonic(inputtest.a, inputtest.b)
    console.log(result);
}
const importAccountPK = async () => {
    const result = await wallet.importAccountPK(inputtest.a, inputtest.b)
    console.log(result);
}
const getNodeProviderListWithLatency = async () => {
    const result = await wallet.getNodeProviderListWithLatency()
    console.log(result);
}
const login = async () => {
    const result = await wallet.login(inputtest.a)
    console.log(result);
}

const getLatencyOfRPC = async () => {
    const result = await wallet.getLatencyOfRPC(inputtest.a)
    console.log(result);
}
const newAccount = async () => {
    const result = await wallet.newAccount(inputtest.a)
    console.log(result);
}
const importAccount = async () => {
    const result = await wallet.importAccount(inputtest.a, inputtest.b, inputtest.c)
    console.log(result);
}
const getAccount = async () => {
    const result = await wallet.getAccount(inputtest.a)
    console.log(result);
}
const getAccountInternal = async () => {
    const result = await wallet.getAccountInternal()
    console.log(result);
}

const deleteAccount = async () => {
    const result = await wallet.deleteAccount(inputtest.a)
    console.log(result);
}
const setPassWord = async () => {
    const result = await wallet.setPassWord(inputtest.a)
    console.log(result);
    // const encodeAccount = cu.jwtEncode(newAccount)
}


const setNodeProvider = async () => {
    const result = await wallet.setNodeProvider(inputtest.a)
    console.log(result);

}
const getNodeProvider = async () => {
    const result = await wallet.getCurrentNodeProvider()
    console.log(result);
}
const getNodeProviderList = async () => {
    const result = await wallet.getNodeProviderList()
    console.log(result);
}


</script>

<style scoped></style>