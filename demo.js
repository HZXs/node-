let express = require('express'); //引入express依赖
let app = express();

app.get('/',(req, res)=>{
    res.send('Hello World!')
})

/*
   监听从 3000 端口进入的所有连接请求
*/
let server = app.listen(3000,()=> {
    let host = server.address().address;
    let port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
})