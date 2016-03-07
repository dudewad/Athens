/**
 * Account
 */
Athens_Account = function (data) {
	Athens_Object.call(this, data, [
		"accountId",
		"admin",
		"user",
		"companyName"
	]);
};

Athens_Account.prototype = Object.create(Athens_Object.prototype);
Athens_Account.prototype.constructor = Athens_Account;



/**
 * Database ID, if there is one
 *
 * @type {string}
 */
Athens_Account.prototype._id = null;



/**
 * The account ID.
 *
 * @type {string}
 */
Athens_Account.prototype.accountId = "";



/**
 * IDs of users marked as admins. Can't be empty; must have at least one value.
 *
 * @type {Array}
 */
Athens_Account.prototype.admin = [];



/**
 * IDs of staff members associated with this account
 */
Athens_Account.prototype.user = [];



/**
 * The name of the company
 *
 * @type {string}
 */
Athens_Account.prototype.companyName = "";



/**
 * List of location IDs for this company
 *
 * @type {Array}    An array of location IDs
 */
Athens_Account.prototype.location = [];