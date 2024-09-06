<template>
    <div>
        macarontest
        <br><br>
        <br>
        <button @click="getAccounts">getAccounts</button>
        <button @click="callerIsOwner">callerIsOwner</button>

        <button @click="macarontest">macarontest</button>
        <button @click="findBestPath000">findBestPath000</button>
        <button @click="mintToken000">mintToken000</button>
        <button @click="deposit000">deposit000</button>
        <button @click="withdraw000">withdraw000</button>
        <button @click="withdrawfull">withdrawfull</button>
        <button @click="liquidate000">liquidate000</button>
        <button @click="openCreditAccount000">openCreditAccount000</button>
        <button @click="getAllCreditAccount000">getAllCreditAccount000</button>
        <button @click="addCollateral">addCollateral</button>
        <button @click="addCollateralbtc">addCollateralbtc</button>
        <button @click="addCollateralbtc000">addCollateralbtc000</button>
        <button @click="findBestPath000">findBestPath000</button>
        <button @click="swapToken000">swapToken000</button>
        <button @click="swapToken111">swapToken111</button>
        <button @click="mintLiquidity000">mintLiquidity000</button>
        <button @click="mintLiquidity111">mintLiquidity111</button>
        <button @click="mintLiquidity222">mintLiquidity222</button>
        <button @click="increaseLiquidityWithUnderLying000">increaseLiquidityWithUnderLying000</button>
        <button @click="toBytes32String">toBytes32String</button>
        <button @click="getAccounts">getAccounts</button>
        <br><br><br>

    </div>
</template>

<script setup lang="ts">
import { MacaronHelper } from "../macaron-helper-sdk/src/macaron/macaronHelper";
import deployment from "../macaron-helper-sdk/src/macaron/deployment.json";
import IMintToken from "../macaron-helper-sdk/src/macaron/abis/IMintToken.json";

const rpc = "https://data-seed-prebsc-2-s1.bnbchain.org:8545";
const testaccount = "0x285bd8C75C7647b7da1C1154776633804d4ff5eC";
const uhaddress =
    deployment.find((item: any) => item.contract === "UiHelper-Macaron")
        ?.address || "";
const addressProvider =
    deployment.find((item: any) => item.contract === "AddressProvider-Macaron")
        ?.address || "";
const testnetFaucet =
    deployment.find((item: any) => item.contract === "TestnetFaucet-Macaron")
        ?.address || "";
const creditFacade =
    deployment.find(
        (item: any) =>
            item.contract === "USDC-Pool-1-CreditManager-2-CreditFacade-Macaron"
    )?.address || "";
const creditManager =
    deployment.find(
        (item: any) => item.contract === "USDC-Pool-1-CreditManager-2-Macaron"
    )?.address || "";
const testusdc =
    deployment.find(
        (item: any) => item.contract === "TestnetMintableERC20-Macaron-USDC"
    )?.address || "";
const testbtc =
    deployment.find(
        (item: any) => item.contract === "TestnetMintableERC20-Macaron-BTC"
    )?.address || "";
const testweth =
    deployment.find(
        (item: any) => item.contract === "TestnetMintableERC20-Macaron-WETH"
    )?.address || "";
const liquidityAdapterAddress =
    deployment.find(
        (item: any) =>
            item.contract ===
            "USDC-Pool-1-CreditManager-2-UniswapV3-Liquidity-Adapter-Macaron"
    )?.address || "";
// const testCreditAccount = "0x2cAE131528cCE08dD6cCf2b1BD1D266aea511238";
const testCreditAccount = "0xe28F9bce3fC3cc53D1558F8e3D233C067de6fCb4";
const testtokenId = 10;

// const msr = "0x2Dcd5eaef91b7EC8DE0c979878498ad2cd632307";
const msr = "0x8ebF596fB47cB54C9a2f87C345EA1456268c4962";
const batchCall = "0xe8Bb3858c561525843d0E345F74640F755495e88";

window.addEventListener('load', async () => {
    if (typeof window.ethereum !== 'undefined') {
        console.log('MetaMask is installed!');
        const provider = window.ethereum;

        try {
            const accounts = await provider.request({ method: 'eth_requestAccounts' });
            console.log('Connected accounts:', accounts);
        } catch (error) {
            console.error('User rejected the request:', error);
        }
    } else {
        console.error('MetaMask not detected. Please install MetaMask!');
    }
});
const macaronHelper = new MacaronHelper({ UiHelperAddress: uhaddress, MacaronSmartRouter: msr, BatchCallAddress: batchCall });
async function macarontest() {
    const macaronHelper = new MacaronHelper({ UiHelperAddress: uhaddress });
    macaronHelper
        .openCreditAccountWithDebt(
            creditFacade,
            testaccount,
            testusdc,
            1000 * 10 ** 6,
            5000 * 10 ** 6
        )
        .then((res) => {
            console.log(res);
        });
}
async function getAccounts() {
    const result = await macaronHelper.getAccounts();
    console.log(result);
}

async function callerIsOwner() {
    const result = await macaronHelper.callerIsOwner(testCreditAccount);
    console.log(result);
}
async function findBestPath000() {
    const amountIn = "65000000";
    const path = [testusdc, testbtc];
    const result = await macaronHelper.findBestPath(
        testCreditAccount,
        amountIn,
        0,
        path
    );
    console.log(result);
}
async function mintToken000() {
    console.log("start mint testusdc");

    const result = await macaronHelper.excuteWriteContract(
        testnetFaucet,
        IMintToken,
        "mintToken",
        [testusdc, testaccount, 10 * 10 ** 11]
    );
    console.log("start mint testusdc");
    const result3 = await macaronHelper.excuteWriteContract(
        testnetFaucet,
        IMintToken,
        "mintToken",
        [testusdc, testaccount, 10 * 10 ** 11]
    );
    console.log("start mint testbtc");
    const result0 = await macaronHelper.excuteWriteContract(
        testnetFaucet,
        IMintToken,
        "mintToken",
        [testbtc, testaccount, 10 * 10 ** 11]
    );
    console.log("start mint testweth");
    const result1 = await macaronHelper.excuteWriteContract(
        testnetFaucet,
        IMintToken,
        "mintToken",
        [testweth, testaccount, 10 * 10 ** 11]
    );
    console.log("start approveChecker");
    await macaronHelper.approveChecker(
        testusdc,
        testaccount,
        creditManager,
        10 * 10 ** 11
    );
}
async function deposit000() {
    const result = await macaronHelper.deposit(creditFacade, 10 * 10 ** 11);
    console.log(result);
}
async function withdraw000() {
    const result = await macaronHelper.withdraw(creditFacade, 666666);
    console.log(result);
}
async function withdrawfull() {
    const result = await macaronHelper.withdraw(creditFacade);
    console.log(result);
}
async function liquidate000() {
    const result = await macaronHelper.liquidate();
    console.log(result);
}
async function getAllCreditAccount000() {
    const result = await macaronHelper.uiHelper("getCreditAccountsByBorrower", [
        testaccount,
    ]);
    console.log(result);

}
async function openCreditAccount000() {
    const result = await macaronHelper.openCreditAccountWithDebt(
        creditFacade,
        testaccount,
        testusdc,
        10000 * 10 ** 6,
        5000 * 10 ** 6
    );
    console.log(result);
}
async function addCollateral() {
    const result = await macaronHelper.addCollateral(
        testCreditAccount,
        testusdc,
        "10000000000"
    );
    console.log(result);
}
async function addCollateralbtc() {
    const result = await macaronHelper.addCollateral(
        testCreditAccount,
        testbtc,
        "10000000000"
    );
    console.log(result);
}
async function addCollateralbtc000() {
    const result = await macaronHelper.addCollateral(
        "0xBd23Eb890c31E8010eCC7Be202b39F10681Ea041",
        testbtc,
        "10"
    );
    console.log(result);
}
async function swapToken000() {
    const amountIn = "6500000000";
    const path = [testusdc, testbtc];
    // const path = [testbtc, testusdc];
    const to = testCreditAccount;
    const tempAccount = "0x925947AEC7fc99928e9610e6Acf737936b90A02c"
    const result = await macaronHelper.swapToken(
        tempAccount,
        amountIn,
        0,
        path
    );
    console.log(result);
}
async function swapToken111() {
    const amountIn = "65000000";
    // const path = [testusdc, testbtc];
    const path = [testbtc, testusdc];
    const to = testCreditAccount;
    const tempAccount = "0x925947AEC7fc99928e9610e6Acf737936b90A02c"
    const result = await macaronHelper.swapToken(
        tempAccount,
        amountIn,
        0,
        path
    );
    console.log(result);
}
async function mintLiquidity000() {
    // // 单边USDC
    const tokens = [
        [testusdc, "666666"],
        [testbtc, 0],
    ];
    // // 单边BTC
    // const tokens = [
    //   [testusdc, 0],
    //   [testbtc, 666],
    // ];
    // 双边
    // const tokens = [
    //   [testusdc, 456653],
    //   [testbtc, 100000],
    // ];
    const st = await macaronHelper.sortTokens(tokens);
    const result = await macaronHelper.mintLiquidity(
        testCreditAccount,
        liquidityAdapterAddress,
        st[0][0],
        st[1][0],
        st[0][1],
        st[1][1],
        500
    );
    console.log(result);
}
async function mintLiquidity111() {
    // // 单边USDC
    // const tokens = [
    //   [testusdc, "66666666"],
    //   [testbtc, 0],
    // ];
    // // 单边BTC
    const tokens = [
        [testusdc, 0],
        [testbtc, 666],
    ];
    // 双边
    // const tokens = [
    //   [testusdc, 456653],
    //   [testbtc, 100000],
    // ];
    const st = await macaronHelper.sortTokens(tokens);
    const result = await macaronHelper.mintLiquidity(
        testCreditAccount,
        liquidityAdapterAddress,
        st[0][0],
        st[1][0],
        st[0][1],
        st[1][1],
        500
    );
    console.log(result);
}
async function mintLiquidity222() {
    // // 单边USDC
    // const tokens = [
    //   [testusdc, "66666666"],
    //   [testbtc, 0],
    // ];
    // // 单边BTC
    // const tokens = [
    //   [testusdc, 0],
    //   [testbtc, 666],
    // ];
    // 双边
    const tokens = [
        [testusdc, 456653],
        [testbtc, 100000],
    ];
    const st = await macaronHelper.sortTokens(tokens);
    const result = await macaronHelper.mintLiquidity(
        testCreditAccount,
        liquidityAdapterAddress,
        st[0][0],
        st[1][0],
        st[0][1],
        st[1][1],
        500
    );
    console.log(result);
}
async function increaseLiquidityWithUnderLying000() {
    macaronHelper
        .increaseLiquidityWithUnderLying(
            testCreditAccount,
            liquidityAdapterAddress,
            41,
            "6666666"
        )
        .then((res) => {
            console.log(res);
        });
}
async function toBytes32String() {
    const result = await macaronHelper.toBytes32String("LIQUIDATOR");
    console.log(result);
}




</script>

<style scoped></style>