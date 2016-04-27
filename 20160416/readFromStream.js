var fs = require('fs');
var data = '';

//create readable Stream
var readerStream = fs.createReadStream('input.txt');
//set encoding is utf8
readerStream.setEncoding('UTF8');

//handle Stream event --> data , end and error
readerStream.on('data', function(chunk){
    data += chunk;
});

readerStream.on('end', function(){
    console.log(data);
});

readerStream.on('error', function(err){
    console.log(err.stack)
});

console.log('the program had executed');
