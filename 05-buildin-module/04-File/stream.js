const fs = require('fs');
/*
流都是基于原生的fs操作文件的方法来实现的，通过fs创建流。所有的 Stream 对象都是 EventEmitter 的实例。常用的事件有：
open -打开文件
data -当有数据可读时触发。
error -在读收和写入过程中发生错误时触发。
close -关闭文件
end - 没有更多的数据可读时触发
*/
//createReadStream 为可读流 createWriteStream为可读写流
let fileReadStream = fs.createReadStream('data.json',{
        highWaterMark:3, //文件一次读多少字节,默认 64*1024
        flags:'r', //默认 'r'
        autoClose:true, //默认读取完毕后自动关闭
        start:0, //读取文件开始位置
        end:3, //流是闭合区间 包含start也含end
        encoding:'utf8' //默认null
});

let count = 0;

//监听数据变化
fileReadStream.on('data',(chunk) => {
    console.log(`${++count} 接收到：${chunk.length}`);
})

//在读收和写入过程中发生错误时触发
fileReadStream.on('error',(err) => {
    console.log(err);
})

//读取结束时触发
fileReadStream.on('end',() => {
    console.log('结束了')
})