var fs = require('fs');
var path = require('path');
var p = process.argv[2];
var extension = process.argv[3];

fs.readdir(p,function(error,data){
	data.forEach(function(data){
		if(path.extname(data) ==='.'+extension){
			console.log(data);
		}
	});
});

//Ejercicio 5