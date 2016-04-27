var events = require('events');
var eventEmitter = new events.EventEmitter();

//eventEmitter.emit('error');

//listener1
var listener1 =  function(){
    console.log('listener1 running.')
}

//listener2
var listener2 =  function(){
    console.log('listener2 running.')
}

//bind connection event, the handler function is listener1
eventEmitter.addListener('connection', listener1);

//bind connection event, the handler function is listener2
eventEmitter.addListener('connection', listener2);

//get the listener count of some event
var eventListeners = events.EventEmitter.listenerCount(eventEmitter, 'connection');
console.log(eventListeners+"个监听器监听连接事件。");

//deal with the connection event
eventEmitter.emit('connection');

//delete the listener function of connection event
eventEmitter.removeListener('connection', listener1);
console.log('listener1 no more be listened');

//trigger connection event
eventEmitter.emit('connection');

eventListeners = events.EventEmitter.listenerCount(eventEmitter, 'connection');
console.log(eventListeners+"个监听器监听连接事件。");

console.log('the program running end');
