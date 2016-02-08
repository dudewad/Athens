/**
 * Account
 */
var Athens_Account = function () {
};

Athens_Account.prototype = {
	/**
	 * The account ID.
	 *
	 * @type {string}
	 */
	accountId: "",



	/**
	 * IDs of users marked as admins. Can't be empty; must have at least one value.
	 *
	 * @type {Array}
	 */
	admin: [],



	/**
	 * IDs of staff members associated with this account
	 */
	user: [],



	/**
	 * The name of the company
	 *
	 * @type {string}
	 */
	companyName: "",



	/**
	 * List of location IDs for this company
	 *
	 * @type {Array}    An array of location IDs
	 */
	location: []
};