var http    = require('request');

var defaults = {
	hostname: 'api.stormondemand.com',
	version:  'v1'
};

function stormApi (settings) {
	this._hostname = settings.hostname || defaults.hostname;
	this._version  = settings.version  || defaults.version;
	this._username = settings.username;
	if (! this._username) {
		throw "Username is a required param";
	}
	this._password = settings.password;
	if (! this._password) {
		throw "Password is a required param";
	}

	/* generate the namespaces that will house the methods later */
	this.Account = {};
	this.Account.Auth = {};
	this.Billing = {};
	this.Billing.Invoice = {};
	this.Billing.Payment = {};
	this.Monitoring = {};
	this.Monitoring.Bandwidth = {};
	this.Monitoring.Load = {};
	this.Monitoring.Services = {};
	this.Network = {};
	this.Network.DNS = {};
	this.Network.DNS.Domain = {};
	this.Network.DNS.Record = {};
	this.Network.DNS.Record.Region = {};
	this.Network.DNS.Reverse = {};
	this.Network.DNS.Zone = {};
	this.Network.Firewall = {};
	this.Network.Firewall.Ruleset = {};
	this.Network.IP = {};
	this.Network.LoadBalancer = {};
	this.Network.Pool = {};
	this.Network.Private = {};
	this.Network.Zone = {};
	this.Notifications = {};
	this.Product = {};
	this.Server = {};
	this.Server.VirtualDomain = {};
	this.Storage = {};
	this.Storage.Block = {};
	this.Storage.Block.Cluster = {};
	this.Storage.Block.Volume = {};
	this.Storm = {};
	this.Storm.Backup = {};
	this.Storm.Config = {};
	this.Storm.Image = {};
	this.Storm.Server = {};
	this.Storm.Template = {};
	this.Support = {};
	this.Support.Alert = {};
	this.Support.Ticket = {};
	this.Utilities = {};
	this.Utilities.Info = {};
	this.VPN = {};

	/* we generate the methods for each object so we can bind them with 'this'
	 * thus allowing us to reference instance data from within the function
	 * - there may be a cleaner way to do this, so patches welcome
	 */
	this.Account.Auth.expireToken = function (params, callback) {
		return this.sendApiRequest('Account/Auth/expireToken.json', params, callback);
	}.bind(this);

	this.Account.Auth.token = function (params, callback) {
		return this.sendApiRequest('Account/Auth/token.json', params, callback);
	}.bind(this);

	this.Billing.Invoice.details = function (params, callback) {
		return this.sendApiRequest('Billing/Invoice/details.json', params, callback);
	}.bind(this);

	this.Billing.Invoice.list = function (params, callback) {
		return this.sendApiRequest('Billing/Invoice/list.json', params, callback);
	}.bind(this);

	this.Billing.Invoice.next = function (params, callback) {
		return this.sendApiRequest('Billing/Invoice/next.json', params, callback);
	}.bind(this);

	this.Billing.Payment.make = function (params, callback) {
		return this.sendApiRequest('Billing/Payment/make.json', params, callback);
	}.bind(this);

	this.Monitoring.Bandwidth.graph = function (params, callback) {
		return this.sendApiRequest('Monitoring/Bandwidth/graph.json', params, callback);
	}.bind(this);

	this.Monitoring.Bandwidth.stats = function (params, callback) {
		return this.sendApiRequest('Monitoring/Bandwidth/stats.json', params, callback);
	}.bind(this);

	this.Monitoring.Load.graph = function (params, callback) {
		return this.sendApiRequest('Monitoring/Load/graph.json', params, callback);
	}.bind(this);

	this.Monitoring.Load.stats = function (params, callback) {
		return this.sendApiRequest('Monitoring/Load/stats.json', params, callback);
	}.bind(this);

	this.Monitoring.Services.get = function (params, callback) {
		return this.sendApiRequest('Monitoring/Services/get.json', params, callback);
	}.bind(this);

	this.Monitoring.Services.monitoringIps = function (params, callback) {
		return this.sendApiRequest('Monitoring/Services/monitoringIps.json', params, callback);
	}.bind(this);

	this.Monitoring.Services.status = function (params, callback) {
		return this.sendApiRequest('Monitoring/Services/status.json', params, callback);
	}.bind(this);

	this.Monitoring.Services.update = function (params, callback) {
		return this.sendApiRequest('Monitoring/Services/update.json', params, callback);
	}.bind(this);

	this.Network.DNS.Domain.list = function (params, callback) {
		return this.sendApiRequest('Network/DNS/Domain/list.json', params, callback);
	}.bind(this);

	this.Network.DNS.Domain.renew = function (params, callback) {
		return this.sendApiRequest('Network/DNS/Domain/renew.json', params, callback);
	}.bind(this);

	this.Network.DNS.Record.create = function (params, callback) {
		return this.sendApiRequest('Network/DNS/Record/create.json', params, callback);
	}.bind(this);

	this.Network.DNS.Record.delete = function (params, callback) {
		return this.sendApiRequest('Network/DNS/Record/delete.json', params, callback);
	}.bind(this);

	this.Network.DNS.Record.details = function (params, callback) {
		return this.sendApiRequest('Network/DNS/Record/details.json', params, callback);
	}.bind(this);

	this.Network.DNS.Record.list = function (params, callback) {
		return this.sendApiRequest('Network/DNS/Record/list.json', params, callback);
	}.bind(this);

	this.Network.DNS.Record.update = function (params, callback) {
		return this.sendApiRequest('Network/DNS/Record/update.json', params, callback);
	}.bind(this);

	this.Network.DNS.Record.Region.create = function (params, callback) {
		return this.sendApiRequest('Network/DNS/Record/Region/create.json', params, callback);
	}.bind(this);

	this.Network.DNS.Record.Region.delete = function (params, callback) {
		return this.sendApiRequest('Network/DNS/Record/Region/delete.json', params, callback);
	}.bind(this);

	this.Network.DNS.Record.Region.update = function (params, callback) {
		return this.sendApiRequest('Network/DNS/Record/Region/update.json', params, callback);
	}.bind(this);

	this.Network.DNS.Reverse.delete = function (params, callback) {
		return this.sendApiRequest('Network/DNS/Reverse/delete.json', params, callback);
	}.bind(this);

	this.Network.DNS.Reverse.update = function (params, callback) {
		return this.sendApiRequest('Network/DNS/Reverse/update.json', params, callback);
	}.bind(this);

	this.Network.DNS.Zone.create = function (params, callback) {
		return this.sendApiRequest('Network/DNS/Zone/create.json', params, callback);
	}.bind(this);

	this.Network.DNS.Zone.delegation = function (params, callback) {
		return this.sendApiRequest('Network/DNS/Zone/delegation.json', params, callback);
	}.bind(this);

	this.Network.DNS.Zone.delete = function (params, callback) {
		return this.sendApiRequest('Network/DNS/Zone/delete.json', params, callback);
	}.bind(this);

	this.Network.DNS.Zone.details = function (params, callback) {
		return this.sendApiRequest('Network/DNS/Zone/details.json', params, callback);
	}.bind(this);

	this.Network.DNS.Zone.list = function (params, callback) {
		return this.sendApiRequest('Network/DNS/Zone/list.json', params, callback);
	}.bind(this);

	this.Network.DNS.Zone.update = function (params, callback) {
		return this.sendApiRequest('Network/DNS/Zone/update.json', params, callback);
	}.bind(this);

	this.Network.Firewall.details = function (params, callback) {
		return this.sendApiRequest('Network/Firewall/details.json', params, callback);
	}.bind(this);

	this.Network.Firewall.getBasicOptions = function (params, callback) {
		return this.sendApiRequest('Network/Firewall/getBasicOptions.json', params, callback);
	}.bind(this);

	this.Network.Firewall.rules = function (params, callback) {
		return this.sendApiRequest('Network/Firewall/rules.json', params, callback);
	}.bind(this);

	this.Network.Firewall.update = function (params, callback) {
		return this.sendApiRequest('Network/Firewall/update.json', params, callback);
	}.bind(this);

	this.Network.Firewall.Ruleset.create = function (params, callback) {
		return this.sendApiRequest('Network/Firewall/Ruleset/create.json', params, callback);
	}.bind(this);

	this.Network.Firewall.Ruleset.details = function (params, callback) {
		return this.sendApiRequest('Network/Firewall/Ruleset/details.json', params, callback);
	}.bind(this);

	this.Network.Firewall.Ruleset.list = function (params, callback) {
		return this.sendApiRequest('Network/Firewall/Ruleset/list.json', params, callback);
	}.bind(this);

	this.Network.Firewall.Ruleset.update = function (params, callback) {
		return this.sendApiRequest('Network/Firewall/Ruleset/update.json', params, callback);
	}.bind(this);

	this.Network.IP.add = function (params, callback) {
		return this.sendApiRequest('Network/IP/add.json', params, callback);
	}.bind(this);

	this.Network.IP.details = function (params, callback) {
		return this.sendApiRequest('Network/IP/details.json', params, callback);
	}.bind(this);

	this.Network.IP.list = function (params, callback) {
		return this.sendApiRequest('Network/IP/list.json', params, callback);
	}.bind(this);

	this.Network.IP.listAccntPublic = function (params, callback) {
		return this.sendApiRequest('Network/IP/listAccntPublic.json', params, callback);
	}.bind(this);

	this.Network.IP.listPublic = function (params, callback) {
		return this.sendApiRequest('Network/IP/listPublic.json', params, callback);
	}.bind(this);

	this.Network.IP.remove = function (params, callback) {
		return this.sendApiRequest('Network/IP/remove.json', params, callback);
	}.bind(this);

	this.Network.IP.request = function (params, callback) {
		return this.sendApiRequest('Network/IP/request.json', params, callback);
	}.bind(this);

	this.Network.LoadBalancer.addNode = function (params, callback) {
		return this.sendApiRequest('Network/LoadBalancer/addNode.json', params, callback);
	}.bind(this);

	this.Network.LoadBalancer.addService = function (params, callback) {
		return this.sendApiRequest('Network/LoadBalancer/addService.json', params, callback);
	}.bind(this);

	this.Network.LoadBalancer.available = function (params, callback) {
		return this.sendApiRequest('Network/LoadBalancer/available.json', params, callback);
	}.bind(this);

	this.Network.LoadBalancer.create = function (params, callback) {
		return this.sendApiRequest('Network/LoadBalancer/create.json', params, callback);
	}.bind(this);

	this.Network.LoadBalancer.delete = function (params, callback) {
		return this.sendApiRequest('Network/LoadBalancer/delete.json', params, callback);
	}.bind(this);

	this.Network.LoadBalancer.details = function (params, callback) {
		return this.sendApiRequest('Network/LoadBalancer/details.json', params, callback);
	}.bind(this);

	this.Network.LoadBalancer.list = function (params, callback) {
		return this.sendApiRequest('Network/LoadBalancer/list.json', params, callback);
	}.bind(this);

	this.Network.LoadBalancer.possibleNodes = function (params, callback) {
		return this.sendApiRequest('Network/LoadBalancer/possibleNodes.json', params, callback);
	}.bind(this);

	this.Network.LoadBalancer.removeNode = function (params, callback) {
		return this.sendApiRequest('Network/LoadBalancer/removeNode.json', params, callback);
	}.bind(this);

	this.Network.LoadBalancer.removeService = function (params, callback) {
		return this.sendApiRequest('Network/LoadBalancer/removeService.json', params, callback);
	}.bind(this);

	this.Network.LoadBalancer.strategies = function (params, callback) {
		return this.sendApiRequest('Network/LoadBalancer/strategies.json', params, callback);
	}.bind(this);

	this.Network.LoadBalancer.update = function (params, callback) {
		return this.sendApiRequest('Network/LoadBalancer/update.json', params, callback);
	}.bind(this);

	this.Network.Pool.create = function (params, callback) {
		return this.sendApiRequest('Network/Pool/create.json', params, callback);
	}.bind(this);

	this.Network.Pool.delete = function (params, callback) {
		return this.sendApiRequest('Network/Pool/delete.json', params, callback);
	}.bind(this);

	this.Network.Pool.details = function (params, callback) {
		return this.sendApiRequest('Network/Pool/details.json', params, callback);
	}.bind(this);

	this.Network.Pool.list = function (params, callback) {
		return this.sendApiRequest('Network/Pool/list.json', params, callback);
	}.bind(this);

	this.Network.Pool.update = function (params, callback) {
		return this.sendApiRequest('Network/Pool/update.json', params, callback);
	}.bind(this);

	this.Network.Private.attach = function (params, callback) {
		return this.sendApiRequest('Network/Private/attach.json', params, callback);
	}.bind(this);

	this.Network.Private.detach = function (params, callback) {
		return this.sendApiRequest('Network/Private/detach.json', params, callback);
	}.bind(this);

	this.Network.Private.get = function (params, callback) {
		return this.sendApiRequest('Network/Private/get.json', params, callback);
	}.bind(this);

	this.Network.Private.getIP = function (params, callback) {
		return this.sendApiRequest('Network/Private/getIP.json', params, callback);
	}.bind(this);

	this.Network.Private.isAttached = function (params, callback) {
		return this.sendApiRequest('Network/Private/isAttached.json', params, callback);
	}.bind(this);

	this.Network.Zone.details = function (params, callback) {
		return this.sendApiRequest('Network/Zone/details.json', params, callback);
	}.bind(this);

	this.Network.Zone.list = function (params, callback) {
		return this.sendApiRequest('Network/Zone/list.json', params, callback);
	}.bind(this);

	this.Network.Zone.setDefault = function (params, callback) {
		return this.sendApiRequest('Network/Zone/setDefault.json', params, callback);
	}.bind(this);

	this.Notifications.all = function (params, callback) {
		return this.sendApiRequest('Notifications/all.json', params, callback);
	}.bind(this);

	this.Notifications.current = function (params, callback) {
		return this.sendApiRequest('Notifications/current.json', params, callback);
	}.bind(this);

	this.Notifications.details = function (params, callback) {
		return this.sendApiRequest('Notifications/details.json', params, callback);
	}.bind(this);

	this.Notifications.resolve = function (params, callback) {
		return this.sendApiRequest('Notifications/resolve.json', params, callback);
	}.bind(this);

	this.Product.details = function (params, callback) {
		return this.sendApiRequest('Product/details.json', params, callback);
	}.bind(this);

	this.Product.getProductCodeFromPath = function (params, callback) {
		return this.sendApiRequest('Product/getProductCodeFromPath.json', params, callback);
	}.bind(this);

	this.Product.list = function (params, callback) {
		return this.sendApiRequest('Product/list.json', params, callback);
	}.bind(this);

	this.Product.price = function (params, callback) {
		return this.sendApiRequest('Product/price.json', params, callback);
	}.bind(this);

	this.Product.startingPrice = function (params, callback) {
		return this.sendApiRequest('Product/startingPrice.json', params, callback);
	}.bind(this);

	this.Server.available = function (params, callback) {
		return this.sendApiRequest('Server/available.json', params, callback);
	}.bind(this);

	this.Server.clone = function (params, callback) {
		return this.sendApiRequest('Server/clone.json', params, callback);
	}.bind(this);

	this.Server.create = function (params, callback) {
		return this.sendApiRequest('Server/create.json', params, callback);
	}.bind(this);

	this.Server.destroy = function (params, callback) {
		return this.sendApiRequest('Server/destroy.json', params, callback);
	}.bind(this);

	this.Server.details = function (params, callback) {
		return this.sendApiRequest('Server/details.json', params, callback);
	}.bind(this);

	this.Server.history = function (params, callback) {
		return this.sendApiRequest('Server/history.json', params, callback);
	}.bind(this);

	this.Server.list = function (params, callback) {
		return this.sendApiRequest('Server/list.json', params, callback);
	}.bind(this);

	this.Server.reboot = function (params, callback) {
		return this.sendApiRequest('Server/reboot.json', params, callback);
	}.bind(this);

	this.Server.resize = function (params, callback) {
		return this.sendApiRequest('Server/resize.json', params, callback);
	}.bind(this);

	this.Server.shutdown = function (params, callback) {
		return this.sendApiRequest('Server/shutdown.json', params, callback);
	}.bind(this);

	this.Server.start = function (params, callback) {
		return this.sendApiRequest('Server/start.json', params, callback);
	}.bind(this);

	this.Server.update = function (params, callback) {
		return this.sendApiRequest('Server/update.json', params, callback);
	}.bind(this);

	this.Server.VirtualDomain.create = function (params, callback) {
		return this.sendApiRequest('Server/VirtualDomain/create.json', params, callback);
	}.bind(this);

	this.Server.VirtualDomain.freeCount = function (params, callback) {
		return this.sendApiRequest('Server/VirtualDomain/freeCount.json', params, callback);
	}.bind(this);

	this.Server.VirtualDomain.list = function (params, callback) {
		return this.sendApiRequest('Server/VirtualDomain/list.json', params, callback);
	}.bind(this);

	this.Server.VirtualDomain.listOrphans = function (params, callback) {
		return this.sendApiRequest('Server/VirtualDomain/listOrphans.json', params, callback);
	}.bind(this);

	this.Server.VirtualDomain.relink = function (params, callback) {
		return this.sendApiRequest('Server/VirtualDomain/relink.json', params, callback);
	}.bind(this);

	this.Storage.Block.Cluster.list = function (params, callback) {
		return this.sendApiRequest('Storage/Block/Cluster/list.json', params, callback);
	}.bind(this);

	this.Storage.Block.Volume.attach = function (params, callback) {
		return this.sendApiRequest('Storage/Block/Volume/attach.json', params, callback);
	}.bind(this);

	this.Storage.Block.Volume.create = function (params, callback) {
		return this.sendApiRequest('Storage/Block/Volume/create.json', params, callback);
	}.bind(this);

	this.Storage.Block.Volume.delete = function (params, callback) {
		return this.sendApiRequest('Storage/Block/Volume/delete.json', params, callback);
	}.bind(this);

	this.Storage.Block.Volume.detach = function (params, callback) {
		return this.sendApiRequest('Storage/Block/Volume/detach.json', params, callback);
	}.bind(this);

	this.Storage.Block.Volume.details = function (params, callback) {
		return this.sendApiRequest('Storage/Block/Volume/details.json', params, callback);
	}.bind(this);

	this.Storage.Block.Volume.list = function (params, callback) {
		return this.sendApiRequest('Storage/Block/Volume/list.json', params, callback);
	}.bind(this);

	this.Storage.Block.Volume.resize = function (params, callback) {
		return this.sendApiRequest('Storage/Block/Volume/resize.json', params, callback);
	}.bind(this);

	this.Storage.Block.Volume.update = function (params, callback) {
		return this.sendApiRequest('Storage/Block/Volume/update.json', params, callback);
	}.bind(this);

	this.Storm.Backup.details = function (params, callback) {
		return this.sendApiRequest('Storm/Backup/details.json', params, callback);
	}.bind(this);

	this.Storm.Backup.list = function (params, callback) {
		return this.sendApiRequest('Storm/Backup/list.json', params, callback);
	}.bind(this);

	this.Storm.Backup.restore = function (params, callback) {
		return this.sendApiRequest('Storm/Backup/restore.json', params, callback);
	}.bind(this);

	this.Storm.Config.details = function (params, callback) {
		return this.sendApiRequest('Storm/Config/details.json', params, callback);
	}.bind(this);

	this.Storm.Config.list = function (params, callback) {
		return this.sendApiRequest('Storm/Config/list.json', params, callback);
	}.bind(this);

	this.Storm.Image.create = function (params, callback) {
		return this.sendApiRequest('Storm/Image/create.json', params, callback);
	}.bind(this);

	this.Storm.Image.delete = function (params, callback) {
		return this.sendApiRequest('Storm/Image/delete.json', params, callback);
	}.bind(this);

	this.Storm.Image.details = function (params, callback) {
		return this.sendApiRequest('Storm/Image/details.json', params, callback);
	}.bind(this);

	this.Storm.Image.list = function (params, callback) {
		return this.sendApiRequest('Storm/Image/list.json', params, callback);
	}.bind(this);

	this.Storm.Image.restore = function (params, callback) {
		return this.sendApiRequest('Storm/Image/restore.json', params, callback);
	}.bind(this);

	this.Storm.Image.update = function (params, callback) {
		return this.sendApiRequest('Storm/Image/update.json', params, callback);
	}.bind(this);

	this.Storm.Server.clone = function (params, callback) {
		return this.sendApiRequest('Storm/Server/clone.json', params, callback);
	}.bind(this);

	this.Storm.Server.create = function (params, callback) {
		return this.sendApiRequest('Storm/Server/create.json', params, callback);
	}.bind(this);

	this.Storm.Server.destroy = function (params, callback) {
		return this.sendApiRequest('Storm/Server/destroy.json', params, callback);
	}.bind(this);

	this.Storm.Server.details = function (params, callback) {
		return this.sendApiRequest('Storm/Server/details.json', params, callback);
	}.bind(this);

	this.Storm.Server.history = function (params, callback) {
		return this.sendApiRequest('Storm/Server/history.json', params, callback);
	}.bind(this);

	this.Storm.Server.list = function (params, callback) {
		return this.sendApiRequest('Storm/Server/list.json', params, callback);
	}.bind(this);

	this.Storm.Server.reboot = function (params, callback) {
		return this.sendApiRequest('Storm/Server/reboot.json', params, callback);
	}.bind(this);

	this.Storm.Server.resize = function (params, callback) {
		return this.sendApiRequest('Storm/Server/resize.json', params, callback);
	}.bind(this);

	this.Storm.Server.shutdown = function (params, callback) {
		return this.sendApiRequest('Storm/Server/shutdown.json', params, callback);
	}.bind(this);

	this.Storm.Server.start = function (params, callback) {
		return this.sendApiRequest('Storm/Server/start.json', params, callback);
	}.bind(this);

	this.Storm.Server.status = function (params, callback) {
		return this.sendApiRequest('Storm/Server/status.json', params, callback);
	}.bind(this);

	this.Storm.Server.update = function (params, callback) {
		return this.sendApiRequest('Storm/Server/update.json', params, callback);
	}.bind(this);

	this.Storm.Template.details = function (params, callback) {
		return this.sendApiRequest('Storm/Template/details.json', params, callback);
	}.bind(this);

	this.Storm.Template.list = function (params, callback) {
		return this.sendApiRequest('Storm/Template/list.json', params, callback);
	}.bind(this);

	this.Storm.Template.restore = function (params, callback) {
		return this.sendApiRequest('Storm/Template/restore.json', params, callback);
	}.bind(this);

	this.Support.Alert.getActive = function (params, callback) {
		return this.sendApiRequest('Support/Alert/getActive.json', params, callback);
	}.bind(this);

	this.Support.Ticket.addFeedback = function (params, callback) {
		return this.sendApiRequest('Support/Ticket/addFeedback.json', params, callback);
	}.bind(this);

	this.Support.Ticket.addTransactionFeedback = function (params, callback) {
		return this.sendApiRequest('Support/Ticket/addTransactionFeedback.json', params, callback);
	}.bind(this);

	this.Support.Ticket.authenticate = function (params, callback) {
		return this.sendApiRequest('Support/Ticket/authenticate.json', params, callback);
	}.bind(this);

	this.Support.Ticket.close = function (params, callback) {
		return this.sendApiRequest('Support/Ticket/close.json', params, callback);
	}.bind(this);

	this.Support.Ticket.create = function (params, callback) {
		return this.sendApiRequest('Support/Ticket/create.json', params, callback);
	}.bind(this);

	this.Support.Ticket.details = function (params, callback) {
		return this.sendApiRequest('Support/Ticket/details.json', params, callback);
	}.bind(this);

	this.Support.Ticket.list = function (params, callback) {
		return this.sendApiRequest('Support/Ticket/list.json', params, callback);
	}.bind(this);

	this.Support.Ticket.reopen = function (params, callback) {
		return this.sendApiRequest('Support/Ticket/reopen.json', params, callback);
	}.bind(this);

	this.Support.Ticket.reply = function (params, callback) {
		return this.sendApiRequest('Support/Ticket/reply.json', params, callback);
	}.bind(this);

	this.Support.Ticket.types = function (params, callback) {
		return this.sendApiRequest('Support/Ticket/types.json', params, callback);
	}.bind(this);

	this.Utilities.Info.ping = function (params, callback) {
		return this.sendApiRequest('Utilities/Info/ping.json', params, callback);
	}.bind(this);

	this.Utilities.Info.version = function (params, callback) {
		return this.sendApiRequest('Utilities/Info/version.json', params, callback);
	}.bind(this);

	this.VPN.create = function (params, callback) {
		return this.sendApiRequest('VPN/create.json', params, callback);
	}.bind(this);

	this.VPN.details = function (params, callback) {
		return this.sendApiRequest('VPN/details.json', params, callback);
	}.bind(this);

	this.VPN.list = function (params, callback) {
		return this.sendApiRequest('VPN/list.json', params, callback);
	}.bind(this);

	this.VPN.update = function (params, callback) {
		return this.sendApiRequest('VPN/update.json', params, callback);
	}.bind(this);

}

stormApi.prototype = Object.prototype;

stormApi.prototype.sendApiRequest = function (method, params, callback) {
	var auth = {
		user: this._username,
		pass: this._password
	};
	var options = {
		url: 'https://' + this._hostname + '/' + this._version + '/' + method,
		auth: auth,
		json: { params: params },
		encoding: 'utf8'
	};
	http.post(options, function (error, response, body) {
		if (response.statusCode == 200) {
			callback(body);
		}
		else {
			throw "Non-200 response [" + response.statusCode + "]: " + body;
		}
	});
};

module.exports = stormApi;
