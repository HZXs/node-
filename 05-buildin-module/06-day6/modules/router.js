const file = require('./file');
const url = require('url');
module.exports = {
    home:(req,res)=>{
        // res.write('首页');
        file.readFile('./view/index.html', res, req);
    },
    login:(req,res) => {
        // res.write('登录页面');
        let urlObject = url.parse(req.url, true).query;
        console.log(urlObject);
        // file.readFile('../view/')
    },
    registor:(req,res) => {
        res.write('注册页面');
    },
    img:(req,res) => {
        file.readImg('./image/img.png',res);
    }
}