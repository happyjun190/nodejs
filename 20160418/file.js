var fs = require('fs');

//异步函数
fs.readFile('input.txt', function(err, data) {
    if(err) {
	return console.error(err);
    }
    console.log('异步函数: '+data.toString());
});

//同步函数
var data = fs.readFileSync('input.txt');
console.log('同步函数: '+data.toString());
console.log('executed end');
