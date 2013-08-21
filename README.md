node-stormapi
=============

Node.js client bindings for the StormOnDemand API.  These are fairly barebones at
the moment and simply provide an easy one-to-one mapping for API methods to Javascript
functions.

Documentation for the API can be found at: https://www.stormondemand.com/api/

How to use this client:

```
var stormAPI = require('stormapi');
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

