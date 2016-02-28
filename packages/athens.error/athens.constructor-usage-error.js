Athens_ConstructorUsageError = function(message) {
	this.name = "Athens_ConstructorUsageError";
	this.message = message || "Unspecified constructor usage error.";
	this.stack = (new Error()).stack;
};
Athens_ConstructorUsageError.prototype = Object.create(Error.prototype);
Athens_ConstructorUsageError.prototype.constructor = Athens_ConstructorUsageError;