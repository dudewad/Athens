Package.describe({
	name: "ghost:athens.event",
	version: "0.0.1",
	// Brief, one-line summary of the package.
	summary: "Event package for Athens application. Defines event controller and models for the calendar system.",
	// URL to the Git repository containing the source code for this package.
	git: "",
	// By default, Meteor will default to using README.md for documentation.
	// To avoid submitting documentation, set this field to null.
	documentation: "README.md"
});

Package.onUse(function (api) {
	api.versionsFrom("1.2.1");
	api.use("ecmascript");
	api.addFiles("athens.event.js");
	api.export("Athens_Event");
});

Package.onTest(function (api) {
	api.use("ecmascript");
	api.use("tinytest");
	api.use("ghost:athens.event");
	api.addFiles("athens.event.test.js");
});
