let express = require('express');
let app = express();
// 没有挂载路径的中间件，应用的每个请求都会执行该中间件
app.use((req, res, next) => {
    console.log('res:',new Date())
    next()
  })
  
  // 挂载至 /user/:id 的中间件，任何指向 /user/:id 的请求都会执行它
  app.use('/user/:id', (req, res, next) => {
    console.log('Request Type:', req.method)
    next()
  })
  
  // 路由和句柄函数(中间件系统)，处理指向 /user/:id 的 GET 请求
  app.get('/user/:id', (req, res, next) => {
    res.send('USER')
  })

let server = app.listen(3000,()=>{
    let host = server.address().address;
    let port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
})