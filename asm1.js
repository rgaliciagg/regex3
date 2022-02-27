const lineReader = require('line-reader');
console.log("inicia lectura");
var counter=1;
lineReader.eachLine(__dirname + '/opera.s', function(line) {
    console.log(counter++,line);
    let e1=/add/;
    if(e1.test(line)) console.log("00");
});
