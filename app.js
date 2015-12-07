
'use strict';

var knox = require('knox'),
	mpu = require('knox-mpu-alt'),
	auth = require('./config/aws.js'),
	client = knox.createClient(auth),

	args = {};

process.argv.forEach(function (val, index, array) {
    if ( val.indexOf('=') !== -1 ) {
        args[val.split('=')[0]] = val.split('=')[1];
    }
});

console.log(args.file.split('/')[args.file.split('/').length-1]);

var upload = new mpu({
    client: client,
    objectName: args.file.split('/')[args.file.split('/').length-1],
    file: './fuck.aif'
}, function(err, body) {
	if ( err ) {
		console.log(err);
	}
 	console.log(body)   
});

upload.on('initiated', function(err) {
	console.log(arguments);
});

upload.on('uploading', function() {
	console.log(arguments);
});