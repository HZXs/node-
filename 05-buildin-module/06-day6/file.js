const fs = require('fs');

module.exports = {
    readFile:(file,res) => {
        fs.readFile(file,'utf-8',(err,data) => {
            if(err) throw err;
            res.write(200,{'Content_Type':'text/html;'})
        })
    },
    readImg:(file,res) => {
        //fs读取文件
        fs.readFile(file,'binary',(err,data) => {
            if(err) throw err;
            res.writeHead(200,{'Content-Type':'image/png'});
            res.write(data,'binary');
            res.end();
        });
    }
}