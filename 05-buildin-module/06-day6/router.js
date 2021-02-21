const file = require('./file');
module.exports = {
    home:(req,res)=>{
        res.write('首页');
    },
    login:(req,res) => {
        res.write('登录页面');
    },
    registor:(req,res) => {
        res.write('注册页面');
    },
    img:(req,res) => {
        file.readImg('./image/img.png',res);
    }
}