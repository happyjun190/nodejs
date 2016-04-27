//import events module
var events = require('events');

//create eventEmitter object
var eventEmitter = new events.EventEmitter();

//create event handler program
var connectHandler = function connected() {
    console.log('连接成功!');

    //trigger data_received event
    eventEmitter.emit('data_reveived');
}

//bind connection event handler program
eventEmitter.on('connection', connectHandler);

//create anonymous function to bind data_received program
eventEmitter.on('data_reveived', function(){
    console.log('数据接收成功!');
});

//trigger connection event
eventEmitter.emit('connection');
console.log('程序处理完毕!');
