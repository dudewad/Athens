Package.describe({
	name: "ghost:athens.collection",
	version: "0.0.1",
	// Brief, one-line summary of the package.
	summary: "",
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
		"mongo"
	]);
	api.addFiles([
		"athens.collection-event.js",
		"athens.collection-account.js"
	]);
	api.export([
		"Athens_col_event",
		"Athens_col_account",
	]);
});

Package.onTest(function (api) {
	api.use("ecmascript");
	api.use("tinytest");
	api.use("ghost:athens.collection");
	api.addFiles("athens.collection-tests.js");
});
