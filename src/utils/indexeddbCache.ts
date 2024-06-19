/* eslint-disable @typescript-eslint/no-explicit-any */
async function openIndexDB(dbName: string, version = 1 ,keyPath = "key") {
    return new Promise((resolve) => {
        //  兼容浏览器
        const indexedDB = window.indexedDB
        let db;
        // 打开数据库，若没有则会创建
        const request = indexedDB.open(dbName, version);
        // 数据库打开成功回调
        request.onsuccess = ()=> {
            db = request.result; 
            // console.log("数据库打开成功");
            resolve(db);
        };
        // 数据库打开失败的回调
        request.onerror = function () {
            console.log("数据库打开报错");
        };
        // 数据库有更新时候的回调
        request.onupgradeneeded = ()=> {
            // 数据库创建或升级的时候会触发
            console.log("onupgradeneeded");
            db = request.result; // 数据库对象
            // 创建存储库
            db.createObjectStore(dbName, {
                keyPath: keyPath,
            });        
        };
    });
}

async function updateDB(db: any, storeName: string, data: any) {
    const request = db
        .transaction([storeName], "readwrite")
        .objectStore(storeName)
        .put(data);

    request.onsuccess = function () {
        // console.log("数据更新成功");
    };

    request.onerror = function () {
        // console.log("数据更新失败");
    };
}

async function getDataById(db: any, storeName: string, id: any) {
    return new Promise((resolve) => {
        const transaction = db.transaction([storeName]);
        const objectStore = transaction.objectStore(storeName);
        const request = objectStore.get(id);

        request.onerror = function () {
            // console.log("事务失败");
        };

        request.onsuccess = function () {
            // console.log("主键查询结果: ", request.result);
            resolve(request.result);
        };
    });
}

async function deleteDataById(db: any, storeName: string, id: any) {
    const request = db
        .transaction([storeName], "readwrite")
        .objectStore(storeName)
        .delete(id);

    request.onsuccess = function () {
        // console.log("数据删除成功");
    };

    request.onerror = function () {
        console.log("数据删除失败");
    };
}

function closeDB(db: { close: () => void; }) {
    db.close();
    console.log("数据库已关闭");
}

async function getCacheByKey(key: string) {
    const db = await openIndexDB("LocalCache")
    // console.log(key)
    const result = await getDataById(db, "LocalCache", key)
    // console.log(result)
    return result
}
async function addCache(data: any) {

    const db = await openIndexDB("LocalCache")
    console.log(db);
    
    updateDB(db, "LocalCache", data)
}
async function deleteCacheByKey(key: string) {
    const db = await openIndexDB("LocalCache")
    // console.log(key)
    deleteDataById(db, "LocalCache", key)
}
export default {
    deleteCacheByKey,
    addCache,
    getCacheByKey,
    closeDB,
}