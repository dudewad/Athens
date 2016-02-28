Athens_Object = function(data){
	if (!(this instanceof Athens_Event)) {
		throw new Athens_ConstructorUsageError("Improper use of constructor -- requires 'new' keyword.");
	}

	for (var prop in data) {
		if (data.hasOwnProperty(prop) && (prop in this)) {
			this[prop] = data[prop];
		}
		else {
			throw new Athens_ArgumentError("Invalid key in object passed to constructor: '" + prop + "' is not part of prototype.");
		}
	}
};