/**
 * The base object for all objects in the Athens project.
 *
 * @param data          {object}        The data to be mapped to an object's prototype
 *
 * @param req           {Array}         A string array of object properties that are required for the prototype to
 *                                      successfully instantiate
 *
 * @throws              {Athens_ConstructorUsageError}  Requires the object to be used as a constructor with the 'new'
 *                                                      key word
 *
 * @throws              {Athens_ArgumentError}          Throws when a property in "required" array is not present on the
 *                                                      passed data object, or if it is undefined.
 *
 * @throws              {Athens_ArgumentError}          Throws when a property on the passed data object doesn't exist
 *                                                      in the prototype.
 *
 * @constructor
 */
Athens_Object = function (data, req) {
	if (!(this instanceof Athens_Object)) {
		throw new Athens_ConstructorUsageError("Improper use of constructor -- requires 'new' keyword.");
	}

	//Check required props first
	if(Array.isArray(req)) {
		for (var i = 0; i < req.length; i++) {
			if (!data.hasOwnProperty(req[i]) || typeof data[req[i]] === "undefined") {
				throw new Athens_ArgumentError("Property [" + req[i] + "] is required in object constructor.");
			}
		}
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