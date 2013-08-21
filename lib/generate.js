var fs      = require('fs');
var _       = require('underscore');
var m       = require('mustache');
var http    = require('request');

http.get('http://www.stormondemand.com/api/docs/v1/docs.json', function (err, res, body) {
	var docs = JSON.parse(body.toString());

	var methods    = [];
	var namespaces = {};
	for (var apiNS in docs) {
		var jsNS = '';

		_.each(apiNS.split('/'), function (part) {
			jsNS         = jsNS + '.' + part;
			namespaces[jsNS] = true;
		});

		for (var method in docs[apiNS].__methods) {
			var metadata = docs[apiNS].__methods[method];
			methods.push({
				method: method,
				apiNs: apiNS,
				jsNs: jsNS,
				input: metadata.__input,
				output: metadata.__output
			});
		}
	}

	var template = fs.readFileSync(__dirname + '/index.mustache').toString();

	var generated = m.render(template, { methods: methods, namespaces: _.sortBy(_.keys(namespaces)) });

	var path = __dirname + '/../index.js';
	console.log("Writing generated API to: " + path);
	console.log(generated);

	fs.writeFileSync(path, generated);
});
