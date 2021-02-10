/*
可使用 express.Router 类创建模块化、可挂载的路由句柄。Router 实例是一个完整的中间件和路由系统
*/
let express = require('express');

let router = express.Router();

//该路由使用的中间件
router.use(function timeLog(req,res,next){
    console.log('Time: ', Date.now());
    next();
})

//定义网页的主页的路由
router.get('/',(req,res)=>{
    res.send('Birds home page');
})

//定义about页的路由
router.get('/about',(req,res)=>{
    res.send('Birds about page');
})

//将路由实例暴露出去
module.exports = router;