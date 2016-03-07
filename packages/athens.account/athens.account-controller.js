/**
 * Account Controller
 */
Athens_AccountController = function (data) {
	Athens_Object.call(this, data);
};

Athens_AccountController.prototype = Object.create(Athens_Object.prototype);
Athens_AccountController.prototype.constructor = Athens_AccountController;



/**
 * Create (write) a new account using an Athens_Account model object
 *
 * @param account   {Athens_Account}    The account to be created/written to DB
 *
 * @return          {string}            The id of the insert
 */
Athens_AccountController.prototype.createAccount = function (account, user) {
	if (!(account instanceof Athens_Account)) {
		throw new TypeError("Cannot create new account. Invalid object passed - must be of type Athens_Account.");
	}
	//TODO: Needs non-happy-path handling
	//Parse properties off object to insert
	var insertObj = {};
	for (var prop in account) {
		if (account.hasOwnProperty(prop)) {
			insertObj[prop] = account[prop];
		}
	}
	return Athens_col_account.insert(insertObj);
};



/**
 * Retrieve an existing account using an Mongo subset selector
 *
 * @param subset        {object}      The selection subset to get from the collection
 */
Athens_AccountController.prototype.findAccount = function (subset) {
	if (!subset) {
		throw new Athens_ArgumentError("Cannot find account. No selection/specifier was passed.");
	}
	//TODO: Need to evaluate whether this should return the raw result of a failed find.
	return Athens_col_account.find(subset);
};



/**
 * Update an existing account using an Mongo subset selector and data object
 *
 * @param selector          {object}        The selection subset to get from the collection
 *
 * @param modifier          {object}        The data to be updated
 *
 * @param callback          {function}      A callback function (optional)
 */
Athens_AccountController.prototype.updateAccount = function (selector, modifier, callback) {
	if (!selector) {
		throw new Athens_ArgumentError("Cannot find account. No selection/specifier was passed.");
	}
	//TODO: Need to force only update of fields on the account object!!!
	Athens_col_account.update(selector, modifier, callback);
};



/**
 * "Remove" an existing account using an id string -- this keeps the item in the DB but deactivates it.
 * Essentially this enables undoable account deletion.
 *
 * @param id     {string}      The mongo ID of the account to be "removed"
 */
Athens_AccountController.prototype.removeAccount = function (id) {
	if (!id) {
		throw new Athens_ArgumentError("Cannot remove account. No id was passed.");
	}
	//TODO: Needs non-happy-path handling
	return Athens_col_account.update({_id: id}, {$set: {deleted: true}});
};



/**
 * Delete an existing account using an id string -- this is not undoable and actually removes the
 * account from the DB. See remove() for the more likely call to make
 *
 * @param id     {string}      The id of the account to be deleted
 */
Athens_AccountController.prototype.deleteEvent = function (id) {
};