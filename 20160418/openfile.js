var fs = require('fs');

//异步打开文件
console.log('file is readying to open');
fs.open('input.txt', 'r+', function(err, fd) {
    if(err) {
    	return console.log(err);
    }
    console.log('file is opened');
});
