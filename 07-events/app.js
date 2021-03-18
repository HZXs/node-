const EventEmitter = require('events');
//定义一个类
class MyEventEmitter extends EventEmitter{}

//将MyEventEmitter类实例化
const event = new MyEventEmitter();

//绑定事件
event.on('play',(value) => {
    console.log(value);
});

//只触发一次
event.once('play',(value) => {
    console.log(value);
});

event.emit('play','movie');