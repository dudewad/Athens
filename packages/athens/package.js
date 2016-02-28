Package.describe({
	name: "ghost:athens",
	version: "0.0.1",
	// Brief, one-line summary of the package.
	summary: "Athens - main modules for server and client",
	// URL to the Git repository containing the source code for this package.
	git: "",
	// By default, Meteor will default to using README.md for documentation.
	// To avoid submitting documentation, set this field to null.
	documentation: "README.md"
});

Package.onUse(function (api) {
	api.versionsFrom("1.2.1");
	api.use([
		"ecmascript",
		"mongo",
		"ghost:athens.event",
		"ghost:athens.event.date"
	]);

	//Both architectures
	api.addFiles("script/both.athens.js");

	//Server-side
	api.addFiles("script/server.athens.js", "server");

	//Client-side
	api.use([
		"jquery",
		"templating"
	], "client");
	api.addFiles([
		"script/client.athens.js",
		"template/events.html"
	], "client");
});

Package.onTest(function (api) {
	api.use("ecmascript");
	api.use("tinytest");
	api.use("ghost:athens");
	api.addFiles("athens-tests.js");
});
