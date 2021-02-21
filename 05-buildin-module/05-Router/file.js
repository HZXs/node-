const fs = require('fs');

module.exports = {
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