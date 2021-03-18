const path = require('path');
const mime = require('mime');
//读取指定文件名的静态资源
const readStaticFile = (filePathName) => {
    let ext = mime.getType(path.parse(filePathName));
    console.log(ext);
    return 'hello'
}

module.exports = {readStaticFile}