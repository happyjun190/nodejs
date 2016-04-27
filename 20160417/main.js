console.log(__filename);
console.log(__dirname);

function printHello() {
    console.log('Hello world');
};

//do {
    printHello();
    //setTimeout(printHello, 2000);
//} while (true)

t = setInterval(printHello, 2000);
clearInterval(t);

console.error('error error error error');

console.warn('warn warn warn warn warn');

console.log('Hello world');
console.log('byvoid%diovyb');
console.log('byvoid%diovyb', 1991);
