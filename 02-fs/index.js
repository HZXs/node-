/*
**fs是file-system的简写，就是文件系统的意思
**例如 fs.readFile就是用来读取文件的
*/
const fs = require('fs');
//writeFile存在文件则进行覆盖，不存在则创建
fs.writeFile('./log.txt','hello',(err,data)=>{
    if(err){
        console.log('文件创建失败');
    }else{
        console.log('文件创建成功');
    }
})
//readFile异步读取只能读取文件
fs.readdir('./',(err,data)=>{
    if(err){
        console.log(err.Error);
    }else{
        console.log('文件读取成功');
    }
})