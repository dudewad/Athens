Package.describe({
	name: "ghost:athens.error",
	version: "0.0.1",
	// Brief, one-line summary of the package.
	summary: "Errors specific to the Athens application",
	// URL to the Git repository containing the source code for this package.
	git: "",
	// By default, Meteor will default to using README.md for documentation.
	// To avoid submitting documentation, set this field to null.
	documentation: "README.md"
});

Package.onUse(function (api) {
	api.versionsFrom("1.2.1");
	api.use("ecmascript");
	api.addFiles([
		"athens.argument-error.js",
		"athens.constructor-usage-error.js"
	]);
	api.export([
		"Athens_ArgumentError",
		"Athens_ConstructorUsageError"
	])
});

Package.onTest(function (api) {
	api.use("ecmascript");
	api.use("tinytest");
	api.use("ghost:athens.error");
	api.addFiles("athens.error-tests.js");
});
