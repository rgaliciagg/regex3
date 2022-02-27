const lineReader = require('line-reader');
console.log("inicia lectura");
var counter=1;
let array1;
lineReader.eachLine(__dirname + '/opera.s', function(line) {
    console.log(counter++,line);
    const e1 = RegExp('    (add|sub|mul|div) r([0123]),r([0123]),r([0123])', 'g');
    if ((array1 = e1.exec(line)) !== null){
        array1[1] = array1[1].replace("add", "00");
        array1[1] = array1[1].replace("sub", "01");
        array1[1] = array1[1].replace("mul", "10");
        array1[1] = array1[1].replace("div", "11");
    //    if(array1[1] === "add") array1[1]="00";
    //    if(array1[1] === "sub") array1[1]="01";
    //    if(array1[1] === "mul") array1[1]="10";
    //    if(array1[1] === "div") array1[1]="11";
        console.log(`Match ${array1[0]} ${array1[1]} ${array1[2]} ${array1[3]} ${array1[4]}`);
    } 
});
