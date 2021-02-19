const http = require('http');
const url = require('url');
//引入路由文件
let router = require('./router_1');
//创建http服务器
http.createServer((req,res) => {
 /*
向请求的客户端发送响应头。
该函数在一个请求内最多只能调用一次，如果不调用，则会自动生成一个响应头。
*/
    res.writeHead(200,{'Content-Type':'text/html; chare'});
    if(req.url !== '/favicon.ico'){
        let pathName = url.parse(req.url).pathname.replace(/\//,'');
        router[pathName](req,res); 
    }
    res.end();

}).listen(3000);
console.log('Server running at http://localhost:3000');  