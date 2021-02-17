//引入http模块
const http = require('http');
//引入https模块
const https = require('https');
//引入cheerio模块
const cheerio = require('cheerio');

//待爬取的地址目标
let url = 'https://www.lagou.com/';

//对html数据做处理
const filterMenu = (html)=>{
    let $ = cheerio.load(html);
}


https.get(url,(res)=>{
    let html = '';
    res.on('data',(data)=>{
        html += data
    })

    res.on('end',()=>{
        console.log(html);
    })
    res.on('error',(err)=>{
        console.log(err);
    })
})