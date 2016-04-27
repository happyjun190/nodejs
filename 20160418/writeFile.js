var fs = require('fs');

console.log('ready to write file');

fs.writeFile('write.txt', '我是通过写入的文件内容!', function(err) {
    if(err) {
	return console.log(err);
    }

    console.log('write data success!');
    console.log('it is seprate line');

    console.log('read wrote data');
    fs.readFile('write.txt', function(err, data){
	if(err) {
	    return console.error(err);
	}
	console.log('异步读取文件数据: ' + data.toString());
    });

});
