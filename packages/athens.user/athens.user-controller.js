/**
 * User Controller
 */
Athens_UserController = function (data) {
	Athens_Object.call(this, data);
};

Athens_UserController.prototype = Object.create(Athens_Object.prototype);
Athens_UserController.prototype.constructor = Athens_UserController;



/**
 * Create (write) a new user using an Athens_User model object
 *
 * @param user      {Athens_User}       The user to be created/written to DB
 *
 * @return          {string}            The id of the insert
 */
Athens_UserController.prototype.createUser = function (user) {
	if (!(user instanceof Athens_User)) {
		throw new TypeError("Cannot create new user. Invalid object passed - must be of type Athens_User.");
	}
	//TODO: Needs non-happy-path handling
	//Parse properties off object to insert
	var insertObj = {};
	for (var prop in user) {
		if (user.hasOwnProperty(prop)) {
			insertObj[prop] = user[prop];
		}
	}
	return Athens_col_user.insert(insertObj);
};



/**
 * Retrieve an existing user using an Mongo subset selector
 *
 * @param subset        {object}      The selection subset to get from the collection
 */
Athens_UserController.prototype.findUser = function (subset) {
	if (!subset) {
		throw new Athens_ArgumentError("Cannot find user. No selection/specifier was passed.");
	}
	//TODO: Need to evaluate whether this should return the raw result of a failed find.
	return Athens_col_user.find(subset);
};



/**
 * Update an existing user using an Mongo subset selector and data object
 *
 * @param selector          {object}        The selection subset to get from the collection
 *
 * @param modifier          {object}        The data to be updated
 *
 * @param callback          {function}      A callback function (optional)
 */
Athens_UserController.prototype.updateUser = function (selector, modifier, callback) {
	if (!selector) {
		throw new Athens_ArgumentError("Cannot find user. No selection/specifier was passed.");
	}
	//TODO: Need to force only update of fields on the user object!!!
	Athens_col_user.update(selector, modifier, callback);
};



/**
 * "Remove" an existing user using an id string -- this keeps the item in the DB but deactivates it.
 * Essentially this enables undoable user deletion.
 *
 * @param id     {string}      The mongo ID of the user to be "removed"
 */
Athens_UserController.prototype.removeUser = function (id) {
	if (!id) {
		throw new Athens_ArgumentError("Cannot remove user. No id was passed.");
	}
	//TODO: Needs non-happy-path handling
	return Athens_col_user.update({_id: id}, {$set: {deleted: true}});
};



/**
 * Delete an existing user using an id string -- this is not undoable and actually removes the
 * user from the DB. See remove() for the more likely call to make
 *
 * @param id     {string}      The id of the user to be deleted
 */
Athens_UserController.prototype.deleteEvent = function (id) {
};