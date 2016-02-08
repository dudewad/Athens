/**
 * Calendar
 */
var Athens_Calendar = function () {};

Athens_Calendar.prototype = {
	/**
	 * Account ID that this calendar definition belongs to
	 *
	 * @type {string}
	 */
	accountId: null,



	/**
	 * Calendar name
	 *
	 * @type {string}
	 */
	name: null,



	/**
	 * A list of the services offered by this calendar. These services must belong to this account.
	 *
	 * @type {Array}    An array of DB IDs of the services to provide
	 */
	serviceId: []
};