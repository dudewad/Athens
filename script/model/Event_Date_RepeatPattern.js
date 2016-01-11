/**
 * Event_Date_RepeatPattern
 */
var Athens_Event_Date_RepeatPattern = function () {
};

Athens_Event_Date_RepeatPattern.prototype = {
	/**
	 * How to consider the repeat pattern: daily, weekly, monthly, or yearly
	 *
	 * @type {string}       An ENUM value of daily, weekly, monthly, or yearly
	 */
	interval:"",



	/**
	 * If set, signifies the regular frequency for the event (every 4 days, every 2 weeks, every 3 months,
	 * every 1 year, etc)
	 *
	 * @type {int}
	 */
	repeatEvery: 1,



	/**
	 * If set, signifies which days of the week to repeat on (Mon/wed, thurs/fri, etc).
	 * Only applies to repeat interval set to "week"
	 *
	 * @type {Array}        An array of integers indicating day of week (0-6 for sun-sat)
	 */
	repeatOn: null,



	/**
	 * If set, signifies whether to repeat by day of week (e.g. second Monday) or day of the month
	 * (e.g. 12th of the month). Only applies to repeat interval set to "month"
	 *
	 * @type {string}       Enum(dayOfWeek, dayOfMonth)
	 */
	repeatBy: null,



	/**
	 * Custom start time to differentiate from normal event start time. Required if the customEndTime is set to a time
	 * earlier than the event's main start time.
	 *
	 * @type {string}
	 */
	customStartTime: null,



	/**
	 * Custom end time to differentiate from normal event end time. Required if customStartTime is set to a time
	 * later than the event's main end time.
	 *
	 * @type {string}
	 */
	customEndTime: null
};