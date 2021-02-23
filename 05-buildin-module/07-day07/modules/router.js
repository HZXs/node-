let file = require('./file');
const url = require('url');

module.exports = {
    home:(req,res)=>{
        // res.write('首页');
        file.readFile('./view/index.html', res, req);
    },
    login:(req,res) => {
        //获取GET请求携带的数据
        // let urlObject = url.parse(req.url, true).query;
        // console.log(urlObject);
        // file.readFile('./view/login.html', res, req);        
        //获取POST请求携带的数据
        let post = ""
        req.on('data', (chunk) => {
            post += chunk
        });

        req.on('end', () => {
            file.postReadFile('../view/login.html', res, req, post);
        });
        // file.readFile('./view/login.html', res, req); 
    },
    registor:(req,res) => {
        res.write('注册页面');
    },
    img:(req,res) => {
        file.readImg('./image/img.png',res);
    }
}