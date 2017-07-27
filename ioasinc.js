var fs = require('fs');
var p = process.argv[2];

fs.readFile(p, 'utf8',function(err,data){
	var line = data.split('\n');
console.log(line.length-1);
});
//Ejercicio 4