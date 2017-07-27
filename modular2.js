var modular = require('./modular');
var p = process.argv[2];
var extension = process.argv[3];

modular(p,extension,function (error,data){
	if(error){		
		console.error(error);
	}
	data.forEach(function (file){
		console.log(file);
	});	
}
);
//Ejercicio 6