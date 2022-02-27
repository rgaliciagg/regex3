const lineReader = require('line-reader');
console.log("inicia lectura");
var counter=1;
let array1;
lineReader.eachLine(__dirname + '/opera.s', function(line) {
    console.log(counter++,line);
//    const regex1 = RegExp('foo*', 'g');
    const e1 = RegExp('add*', 'g');
//   let e1=/add/;
    let e2=/sub/;
    let e3=/mul/;
    let e4=/div/;
//    let e5=/R0/;
const e9 = RegExp(' ', 'g');
const e5 = RegExp('\br0', 'g');
const e6 = RegExp('\br1', 'g');
//    let e6=/R1/;
//    let e7=/R2/;
const e7 = RegExp('r2', 'g');
    let e8=/R3/;

//    if(e1.test(line)){
    
    if ((array1 = e1.exec(line)) !== null) console.log(`Found 00 ${array1[0]}. Next starts at ${e1.lastIndex}.`);
    if ((array1 = e9.exec(line)) !== null) console.log(`Found space ${array1[0]}. Next starts at ${e9.lastIndex}.`);
//    if ((array1 = e5.exec(line)) !== null) console.log(`Found 100 ${array1[0]}. Next starts at ${e5.lastIndex}.`);
    if ((array1 = e7.exec(line)) !== null) console.log(`Found 200 ${array1[0]}. Next starts at ${e7.lastIndex}.`);
    
    if(e2.test(line)) console.log("01");
    if(e3.test(line)) console.log("10");
    if(e4.test(line)) console.log("11");
});
