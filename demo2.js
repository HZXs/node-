/*
可使用 express.Router 类创建模块化、可挂载的路由句柄。Router 实例是一个完整的中间件和路由系统
*/
let express = require('express');
let router = require('./router');
let app = express();

app.use('/api',router);

let server = app.listen(9000,()=>{
    let host = server.address().address;
    let port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port)  
})
