Athens_ArgumentError = function(message) {
	this.name = "Athens_ArgumentError";
	this.message = message || "Unspecified argument error.";
	this.stack = (new Error()).stack;
};
Athens_ArgumentError.prototype = Object.create(Error.prototype);
Athens_ArgumentError.prototype.constructor = Athens_ArgumentError;