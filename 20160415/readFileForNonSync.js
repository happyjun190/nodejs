var fs = require('fs');

fs.readFile('input.txt', function(err, data){
   console.log(err);
   if(err) {
      console.log(err.stack);
      return;
   }
   console.log(data.toString());
});

console.log('the program is runing to end!');

