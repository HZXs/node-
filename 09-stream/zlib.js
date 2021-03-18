const fs = require('fs');
const zlib = require('zlib');

const gzip = zlib.createGzip();

//创建可读流
const readStream = fs.createReadStream('./logs.txt');
//创建可读写流
const writeStream = fs.createWriteStream('./logs.gzip');

readStream
.pipe(gzip)
.pipe(writeStream)
