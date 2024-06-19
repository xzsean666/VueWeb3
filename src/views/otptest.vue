<template>
    <div>
        otptest
        <br>
        <h1>{{ obj.time }}</h1>
        <br>

        <button @click="newSecret">newSecret</button>
        <br>
        <img :src=obj.qrcodeImg>
        <p>{{ obj.secret }}</p>
        <br>
        <p>{{ obj.token }}</p>
        <br>

        <h1>{{ obj1.testresult }}</h1>
        <p>code:</p>
        <input type="text" v-model="obj1.testtoken">
        <p>secret:</p>
        <input type="text" v-model="obj1.testsecret">
        <br>
        <button @click="verify">verify</button>




    </div>
</template>

<script setup lang="ts">
import OTPUtils from "../utils/OTPUtils";
const obj1 = reactive({
    testtoken: "",
    testsecret: "",
    testresult: "",
})
const obj = reactive({
    time: 0,
    qrcodeImg: "",
    secret: "",
    token: "",
})

let opt = new OTPUtils(obj.secret)
setInterval(() => {
    obj.time = opt.timer()
    obj.token = opt.getToken()
}, 1000)

async function newSecret() {
    const result = await opt.newSecret("sean", "PSC")
    obj.qrcodeImg = result.imageUrl
    obj.secret = result.secret
    opt = new OTPUtils(result.secret)
    obj.token = opt.getToken()
}
async function verify() {
    const verifyopt = new OTPUtils(obj1.testsecret)
    obj1.testresult = (verifyopt.getToken() === obj1.testtoken) ? "PASS" : "ERORR"
}

</script>

<style scoped></style>