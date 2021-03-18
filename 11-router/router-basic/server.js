const http = require('http');
const fs = require('fs');
const mime = require('mime');

const app = http.createServer((req,res) => {
    // res.end('ok.')  
  let urlString = req.url;
  const type = mime.getType(urlString.split('.')[1]); //判断返回的数据类型
  res.writeHead(200,{
      'conntent-type':type
  })
  const file = fs.readFileSync(`.${urlString}`);
  res.end(file);
})

app.listen(3000,() => {
    console.log('localhost:3000')
})