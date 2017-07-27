var http = require('http');
var p = process.argv[2];

http.get(p, function(r){
	r.setEncoding('utf8');
	r.on('data',console.log)
})
//Ejercicio 7