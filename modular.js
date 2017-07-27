var fs = require('fs');
var path = require('path');

module.exports = function(p,extension,callback){
	fs.readdir(p, function(error,data){
		if(error){
			return callback(error)
		}
		arr = new Array();
		data.forEach(function(file){
			if(path.extname(file) === '.'+extension){
				arr.push(file)
			}
		})
		callback(null,arr);
	})
}
//Ejercicio 6
