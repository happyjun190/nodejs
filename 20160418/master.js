const fs = require('fs');
const child_process = require('child_process');

for(var i=0; i<300; i++) {
    var workProcess = child_process.exec('node support.js '+ i,
    	function (error, stdout, stdin){
	    if(error) {
	    	console.error(error.stack);
	    	console.log('Error Code: '+ error.code);
	    	console.log('Signal recerved: '+ error.signal);
 	    }
	    console.log('stdout: ' + stdout);
	    console.log('stdin: ' + stdin);
        });
	workProcess.on('exit', function(code){
	console.log('child process had exited :' + code);
    });
}

