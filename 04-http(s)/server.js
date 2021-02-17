//引入http模块
const http = require('http');

//创建一个HTTP服务器 request:请求对象 response:响应对象
const server = http.createServer((request,response)=>{
    let url = request.url;
    response.write(url);
    response.end();
})

server.listen(8090,'localhost',()=>{
    console.log('localhost:8090')
})