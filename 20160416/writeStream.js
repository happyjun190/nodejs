var fs = require('fs');

var data='菜鸟教程官网地址:www.runoob.com';

var writerStream = fs.createWriteStream('output.txt');

writerStream.write(data,'UTF8');

//handle Stream event --> data, end, end error
writerStream.on('finish', function(){
    console.log('write finished');
});

writerStream.on('error', function(err){
    console.log(err.stack);
});

console.log('the program had executed');
