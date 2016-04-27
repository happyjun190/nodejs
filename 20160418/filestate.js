var fs = require('fs');

console.log('ready to open file');

fs.stat('input.txt', function(err, stats) {
    if(err) {
    	return console.error(err);
    }
    console.log(stats);
    console.log('file read success');

    //check file type

    console.log('is file ? ' + stats.isFile());
    console.log('is directory ? ' + stats.isDirectory());
    console.log(stats);
});
