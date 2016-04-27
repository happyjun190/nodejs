var fs = require('fs');

fs.stat('/opt/app/nodejs/js/openfile.js', function (err, stats) {
    console.log(stats.isFile());
});
