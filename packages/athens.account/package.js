Package.describe({
  name: "ghost:athens.account",
  version: "0.0.1",
  // Brief, one-line summary of the package.
  summary: "",
  // URL to the Git repository containing the source code for this package.
  git: "",
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: "README.md"
});

Package.onUse(function(api) {
  api.versionsFrom("1.2.1");
  api.use([
	  "ecmascript",
	  "ghost:athens.collection",
	  "ghost:athens.error",
	  "ghost:athens.object"
  ]);
  api.addFiles([
	  "athens.account.js",
	  "athens.account-controller.js",
  ]);
  api.export([
	  "Athens_Account",
	  "Athens_AccountController"
  ]);
});

Package.onTest(function(api) {
  api.use("ecmascript");
  api.use("tinytest");
  api.use("ghost:athens.account");
  api.addFiles("athens.account-tests.js");
});
