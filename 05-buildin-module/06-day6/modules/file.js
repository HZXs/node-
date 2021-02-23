const fs = require('fs');
const queryString = require('querystring');

module.exports = {
    readFile:(file,res,req) => {
        fs.readFile(file,'utf-8',(err,data) => {
            if(err) throw err;
            res.writeHead(200,{'Content-Type':'text/html; charset=utf-8'});
            res.write(data);
            res.end();
        })
    },
    postReadFile:(file, res, req, post) => {
        let urlObject = queryString.parse(post)
        let array = ['email', 'password']
        let reg;
        fs.readFile(file,'utf-8',(err,data) => {
            if(err) throw err;
            res.writeHead(200,{'Content-Type':'text/html; charset=utf-8'});

            for(var i=0; i<array.length; i++){
                reg = new RegExp('{'+array[i]+'}','gi');
                data = data.replace(reg, urlObject[array[i]]);
            }
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