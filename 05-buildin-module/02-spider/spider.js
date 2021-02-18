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
    let menu = $('.menu_main');
    let menuData = [];
    menu.each((index,value)=>{
        //获取一级菜单
        let menuTitle = $(value).find('h2').text();
        //获取二级菜单
        let menuList = $(value).find('a'); 
        let menuLists = [];
        menuList.each((index,value)=>{
            menuLists.push($(value).text());
        })
        menuData.push({
            menuTitle:menuTitle,
            menuList:menuLists
        })
    })
    return menuData
}

//打印回显
const printMenu = (menu)=>{
    menu.forEach((value)=>{
        console.log(value.menuTitle+'\n');
        value.menuList.forEach((value)=>{
            console.log(value);
        })
    })
}


https.get(url,(res)=>{
    let html = '';
    res.on('data',(data)=>{
        html += data
    })

    res.on('end',()=>{
        // console.log(html);
        let result = filterMenu(html);
        printMenu(result);
    })
    res.on('error',(err)=>{
        console.log(err);
    })
})