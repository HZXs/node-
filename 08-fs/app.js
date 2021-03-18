const fs = require('fs');
const fsPromises = require('fs').promises;
// //创建文件夹
// fs.mkdir('logs',(err) => {
//     if(err) throw err;
//     console.log('创建文件夹')
// })

// //修改文件夹or文件名字
// fs.rename('./logs','./log',() => {
//     console.log('文件夹修改成功');
// })

// //删除文件夹
// fs.rmdir('./log',(err) => {
//     if(err) throw err;
//     console.log('删除成功');
// })

// //访问文件夹or文件内容
// fs.readdir('./logs',(err,result) => {
//     console.log(result);
// })

// //追加内容
// fs.appendFile('./logs/log1.log',"!!!",(err) => {
//     console.log('done.')
// })

// //删除文件
// fs.unlink('./logs/log1.log',(err) => {
//     console.log('unlink');
// })

// //读取文件
// fs.readFile('./logs/log1.log','utf-8',(err,connect) => {
//     console.log(connect);
// });

// //异步读取文件
// (async () => {
//     let result = await fsPromises.readFile('./logs/log1.log');
//     console.log(result.toString());
// })()

////遍历创建文件
// for(var i =0; i< 10; i++){
//     fs.writeFile(`./logs/log${i}.log`,`log-${i}`,(err) => {
//         if(err) throw err
//         console.log('done.')
//     })
// }

//遍历文件(判断当前是文件夹还是文件)
let readDir = (dir) => {
    fs.readdir(dir,(err,content) => {
        if(err) throw err
        content.forEach((value, index) => {
            let joinDir = `${dir}${value}`
            fs.stat(joinDir,(err,stats) => {
                let isDirectory = stats.isDirectory();
                if(isDirectory){
                    readDir(joinDir)
                    // console.log('111')
                }else{
                    fs.readFile(joinDir,'utf-8',(err,content) => {
                        console.log(content)
                    })
                }
            })
        })
    })
};

// readDir('./')

//监听文件变化
fs.watch('./logs/log1.log',(err) => {
    console.log('file has changed.')
})

