node-stormondemand
=============

Node.js client bindings for the StormOnDemand API.  These are fairly barebones at
the moment and simply provide an easy one-to-one mapping for API methods to Javascript
functions.

Documentation for the API can be found at: https://www.stormondemand.com/api/

To install:

```
npm install stormondemand
```

How to use this client:

```
var stormAPI = require('stormondemand');
var client   = new stormAPI({ username: "<fill-me-in>", password: "<fill-me-in>" });

// Get my account history
client.Notifications.all({}, function (res) {
	for (var i=0; i<res.page_size; i++) {
		console.log(res.items[i]);
	}
});

// Create an actual Storm server
client.Storm.Server.create({
	config_id: 2,
	template: 'CENTOS_62_CPANEL',
	domain: 'my.storm-server.fake'
}, function (res) {
	console.log(res);
});
```

This client is programmatically generated from current API documentation.  In order to regenerate
the client library for new methods, it's extremely simple.  It requires an additional installation
of the mustache templating engine.  With that installed, it's a simple process to regenerate
the client:

```
npm install mustache
cd node-stormondemand
node lib/generate.js
```

This will download the current documentation, and regenerate index.js with all the current
API methods.

For testing, we use nodeunit.  For more information on installing and setting up nodeunit,
please refer to https://github.com/caolan/nodeunit

Given that being able to actually test the API requires valid API credentials, those can be
set in two ways.  First, you can create a .stormondemand.json file in your HOME folder.

```
{
	"username": "<fill-me-in>",
	"password": "<fill-me-in>"
}
```

The tests will pick this file up and use it for the parameters to creating the API client.

Alternatively, you can set environment variables:

```
export STORMONDEMAND_USERNAME='<fill-me-in>'
export STORMONDEMAND_PASSWORD='<fill-me-in>'
```

To run the tests:

```
cd node-stormondemand
nodeunit .
```

