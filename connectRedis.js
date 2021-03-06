var redis = require('redis');

client = redis.createClient(6379, 'localhost');

//验证
//client.auth(password, callback);

client.on('error', function(){
    console.log('Error : ' + err);
});

client.set("string key", "string val", redis.print);

client.hset("hash key", "hashtest 1", "some value", redis.print);
client.hset(["hash key", "hashtest 2", "some other value"], redis.print);

//遍历哈希表"hash key"
client.hkeys("hash key", function (err, replies) {
    console.log(replies.length + " replies:");
    replies.forEach(function (reply, i) {
        console.log("    " + i + ": " + reply);
    });
    client.hget("hash key","hashtest 1",redis.print);
    client.quit();
});
