const url = require('url');
const  querystring = require('querystring');

const urlString = 'https://www.cnblogs.com/xiongdongdong/p/11398466.html?id=6';

//url.parse()解析地址获取具体信息
console.log(url.parse(urlString));

//url.formeat()将一个解析后的URL对象、转成、一个格式化的URL字符串
let formeat = {
    protocol: 'https:',
    slashes: true,
    auth: null,
    host: 'www.cnblogs.com',
    port: null,
    hostname: 'www.cnblogs.com',
    hash: null,
    search: '?id=6',
    query: 'id=6',
    pathname: '/xiongdongdong/p/11398466.html',
    path: '/xiongdongdong/p/11398466.html?id=6',
    href: 'https://www.cnblogs.com/xiongdongdong/p/11398466.html?id=6'
  }
  console.log(url.format(formeat));

//url.resolve()替换 域名后面第一个“/”后的内容
let a = url.resolve('/one/two/three', 'four') ,
b = url.resolve('http://example.com/', '/one'),
c = url.resolve('http://example.com/one', '/two');
console.log(a +","+ b +","+ c);
/*
querystring模块用于解析与格式化url查询字符串
它提供了四个方法，分别是：querystring.parse, querystring.stringify, querystring.escape和querystring.unescape;
*/

// 1、querystring.parse(string, separator, eq, options)，该方法是将一个字符串反序列化为一个对象。
// string: 指需要反序列化的字符串;
// separator(可选)： 指用于分割字符串string的字符，默认为 &;
// eq(可选)： 指用于划分键和值的字符和字符串，默认值为 "=";
// options(可选)： 该参数是一个对象，里面可设置 maxKeys 和 decodeURIComponent 这两个属性。
console.log(querystring.parse(formeat.query));

// 2、querystring.stringify(obj, separator, eq, options),该方法是将一个对象序列化成一个字符串。
// 参数：obj指需要序列化的对象；
// separator(可选)，用于连接键值对的字符或字符串，默认为 &；
// eq(可选)，用于连接键和值的字符或字符串，默认值为 "=";
// options(可选)，传入一个对象，该对象设置 encodeURIComponent这个属性；
console.log(querystring.stringify(formeat));

//3、querystring.escape(str)escape该方法可使传入的字符串进行编码
const char = "name=小明&sex=男";
const res = querystring.escape(char);
console.log(res);  // 输出 name%3D%E7%A9%BA%E6%99%BA%26sex%3D%E7%94%B7

//4、querystring.unescape(str)该方法是对 使用了 escape编码的字符进行解码
const res2 = querystring.unescape(res);
console.log(res2); // name=空智&sex=男