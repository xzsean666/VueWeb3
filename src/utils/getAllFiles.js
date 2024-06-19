// function test() {
//     let allFiles = getAllFiles(srcDir);
//     console.log(`文件数量:${allFiles.length}`);
//     for (let i = 0; i < allFiles.length; i++) {
//         console.log(allFiles[i]);
//         // 同步读取文件内容
//         let content = fs.readFileSync(filePath).toString();
//         console.log(content);
// 	}
// }

function getAllFiles(filePath) {
    let allFilePaths = [];
    if (fs.existsSync(filePath)) {
        const files = fs.readdirSync(filePath);
        for (let i = 0; i < files.length; i++) {
            let file = files[i];
            let currentFilePath = filePath + '/' + file;
            let stats = fs.lstatSync(currentFilePath);
            if (stats.isDirectory()) {
                allFilePaths = allFilePaths.concat(getAllFiles(currentFilePath));
            } else {
                allFilePaths.push(currentFilePath);
            }
        }
    } else {
        console.warn(`指定的目录${filePath}不存在！`);
    }
    return allFilePaths;
}
export default getAllFiles