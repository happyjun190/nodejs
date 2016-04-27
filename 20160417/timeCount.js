console.info('Program starting execute');

var counter = 1000000;

console.log('count: %d', counter);

console.time('get data');

var i=1;
do {
    console.log('累加:'+i);
    i ++;
} while(i<=counter);

console.timeEnd('get data');

console.info('program has executed')
