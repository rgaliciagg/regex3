const lineReader = require('line-reader');
console.log("inicia lectura");
var counter=1;
lineReader.eachLine(__dirname + '/index.html', function(line) {
//lineReader.eachLine('/home/pi/regex/index.html', function(line) {    
    console.log(counter++);
    console.log(line);
});
