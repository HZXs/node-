const http = require('http');
const path = require('path');
const {readStaticFile} = require('./readStaticFile.js');

const app = http.createServer((req,res) => {
    let urlString = req.url;
    let filePathName = path.resolve(__dirname,'./',urlString);
    let data = readStaticFile(filePathName);

    res.write(data);
    res.end();
})

app.listen(3000,() => console.log('localhost:3000'))