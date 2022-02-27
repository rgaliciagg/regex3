const lineReader = require('line-reader');
let array1;
var ar1 = ["add","sub","mul","div"];
var ar2 = ["00","01","10","11"];
lineReader.eachLine(__dirname + '/opera.s', function(line) {
    const e1 = RegExp('    (add|sub|mul|div) r([0123]),r([0123]),r([0123])', 'g');
    if ((array1 = e1.exec(line)) !== null){
        for (let i = 0; i < 4; i++) {
            array1[1] = array1[1].replace(ar1[i], ar2[i]);}
        for (let j = 2; j <= 4; j++) {    
            for (let i = 0; i < 4; i++) {
                array1[j] = array1[j].replace(i, ar2[i]); }}
        console.log(`Match ${array1[0]}   ${array1[1]} ${array1[2]} ${array1[3]} ${array1[4]}`); }
    else { console.log("error de sintaxis", line); } });

