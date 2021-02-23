const fs = require('fs');

module.exports = {
    readFile:(file,res,req) => {
        fs.readFile(file,'utf-8',(err,data) => {
            if(err) throw err;
            res.writeHead(200,{'Content-Type':'text/html; charset=utf-8'});
            res.write(data);
            res.end();
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