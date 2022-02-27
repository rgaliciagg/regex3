const lineReader = require('line-reader');
console.log("inicia lectura");
var counter=1;
lineReader.eachLine(__dirname + '/opera.s', function(line) {
    console.log(counter++,line);
    let e1=/add/;
    let e2=/sub/;
    let e3=/mul/;
    let e4=/div/;
    if(e1.test(line)) console.log("00");
    if(e2.test(line)) console.log("01");
    if(e3.test(line)) console.log("10");
    if(e4.test(line)) console.log("11");
});
