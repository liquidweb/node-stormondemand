var stormAPI = require('../index');

var home     = process.env[(process.platform == 'win32') ? 'USERPROFILE' : 'HOME'];
var params   = {};
try {
	params = require(home + '/.stormondemand.json');
} catch (e) {
	if (process.env.STORMONDEMAND_USERNAME) {
		params.username = process.env.STORMONDEMAND_USERNAME;
	}
	if (process.env.STORMONDEMAND_PASSWORD) {
		params.password = process.env.STORMONDEMAND_PASSWORD;
	}
}

if (params.username && params.password) {
	var client = new stormAPI(params);

	exports.testPing = function (test) {
		test.expect(1);
		client.Utilities.Info.ping({}, function (res) {
			test.deepEqual(res, { ping: "success" }, "Able to ping the API just fine");
			test.done();
		});
	};

	exports.testNotifications = function (test) {
		test.expect(1);
		client.Notifications.all({}, function (res) {
			test.equal(res.item_count, res.items.length, "Got a valid notification response");
			test.done();
		});
	};
}
else {
	console.log("For more useful tests, you must provide API credentials by either creating a .stormondemand.json file in your home directory or providing STORMONDEMAND_USERNAME and STORMONDEMAND_PASSWORD in your environment");
}

exports.testValidation = function (test) {
	test.expect(2);
	test.throws(function () {
		var client = new stormAPI({ password: "foobar" });
	}, /Username is a required param/, "Fails with no username");
	test.throws(function () {
		var client = new stormAPI({ username: "foobar" });
	}, /Password is a required param/, "Fails with no password");
	test.done();
};
