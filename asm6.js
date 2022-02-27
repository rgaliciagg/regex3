
const lineReader = require('line-reader');
let array1;
var ar1 = ["add","sub","mul","div"];
var ar2 = ["00","01","10","11"]
var op1;
lineReader.eachLine(__dirname + '/opera.s', function(line) {
    const e1 = RegExp('    (add|sub|mul|div) r([0123]),r([0123]),r([0123])', 'g');
    if ((array1 = e1.exec(line)) !== null){
        for (let i = 0; i < 4; i++) {
            array1[1] = array1[1].replace(ar1[i], ar2[i]);
          }
        for (let i = 0; i < 4; i++) {
            array1[2] = array1[2].replace(i, ar2[i]);
          }
        for (let i = 0; i < 4; i++) {
            array1[3] = array1[3].replace(i, ar2[i]);
          }
        for (let i = 0; i < 4; i++) {
            array1[4] = array1[4].replace(i, ar2[i]);
          }

    //    array1[1] = array1[1].replace(ar1[0], ar2[0]);
    //    array1[1] = array1[1].replace("sub", "01");
    //    array1[1] = array1[1].replace("mul", "10");
    //    array1[1] = array1[1].replace("div", "11");

    //    array1[2] = array1[2].replace("2", "10");
        op1 = ((array1[2])-1);
        console.log(`Match ${array1[0]}   ${array1[1]} ${array1[2]} ${array1[3]} ${array1[4]}`);
        console.log(op1);
    } });

