/**
 * Availability
 */
var Athens_Availability = function () {};

Athens_Availability.prototype = {
	/**
	 * Account ID that this calendar definition belongs to
	 *
	 * @type {string}
	 */
	accountId: "",



	/**
	 * User Id -- if this availability object pertains to a specific user, this should be set.
	 *
	 * @type {string}
	 */
	userId: "",



	/**
	 * Days of the week that this availability object is for. 0-6 where each day is a day of the week
	 * starting on Sunday.
	 *
	 * @type {Array}    An enum array of integers from 0 to 6
	 */
	days: [],



	/**
	 * Start time as a 24-hour string (e.g. "09:30" or "15:45")
	 *
	 * @type {String}
	 */
	startTime: null,



	/**
	 * End time as a 24-hour string (e.g. "09:30" or "15:45")
	 *
	 * @type {String}
	 */
	endTime: null,



	/**
	 * The start date of this availability object. If empty, this is implied to be "for all time" from the beginning
	 * of time until the end date. Note that time isnot relevant, and only the date will be considered because
	 * start/end times are stored in their own properties.
	 *
	 * @type {Date}
	 */
	startDate: null,



	/**
	 * The end date of this availability object. If empty, this is implied to be "for all time" from the the start
	 * date onward. Note that time is not relevant, and only the date will be considered because start/end times are
	 * stored in their own properties.
	 *
	 * @type {Date}
	 */
	endDate: null,



	/**
	 * Whether this object indicates that the time period specifid by the date/time properties is available or not.
	 *
	 * @type {Boolean}
	 */
	available: true
};