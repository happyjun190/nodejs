var EventEmitter = require('events').EventEmitter;
var event = new EventEmitter();

event.on('some_event', function(){
    console.log('some_event 事件触发');
});


setTimeout(function(){
    event.emit('some_event');
}, 1000);



event.on('someEvent', function(arg1,arg2){
    setTimeout(function(){
        console.log('listener1', arg1, arg2);
    }, 1000);
});

event.on('someEvent', function(arg1,arg2){
    console.log('listener2', arg1, arg2);
});

event.emit('someEvent', 'arg1 param', 'arg2 param');

