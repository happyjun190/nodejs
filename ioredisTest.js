var Redis = require('ioredis');
var sugarjs = require('sugar');
var redis = new Redis({
  port: 6379,
  host: 'localhost',
  family: 4,           // 4 (IPv4) or 6 (IPv6)
  //password: 'auth',
  db: 1
});

// assign 是 sugarjs 裏面的函數
// 把 db 塞到字符串裏面的 {db} 裏去
var subscribeKey =  '__keyevent@{db}__:expired'.assign({ db: 1 });

console.log(subscribeKey);

redis.once('connect', function(){
    // 假設我們需要選擇 redis 的 db，因爲實際上我們不會去污染默認的 db 0
    redis.select(1, function(err) {
	if(err) {
	    process.exit(4);
	};
	redis.subscribe(subscribeKey, function(){
	    console.log('订阅频道成功!');
	});
    });
});


//监听从频道 foo 来的消息
redis.on('message', function(channel, msg){
    console.log(channel, msg);
});
