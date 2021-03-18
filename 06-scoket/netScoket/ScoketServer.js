let net = require('net');

//创建soket服务器实例
let chatServer = net.createServer(),
    clientMap = new Object();

let i = 0; //连接名称的流水号
//连接成功
chatServer.on('connection',(client) => {
    console.log('客户端有人连接了~');
    client.name = ++i;
    clientMap[client.name] = client;

    //对客户端发送消息的监听
    client.on('data',(data) => {
        console.log('客户端传来：' + data);
        broadcast(data.client)
    })

    //数据错误事件处理
    client.on('error',(e) => {
        console.log('client error' + e);
        client.end();
    })

    //客户端关闭事件
    client.on('clonse',(data) => {
        delete clientMap[client.name];
        console.log(client.name + '下线了！');
        broadcast(`${client.name}下线了！`,client);
    })
})

//消息广播
const broadcast = (message,client) => {
    clientMap.forEach((el,key) => {
        clientMap[key].write(client.name+'say:'+message+'\n');
    });
} 
