/**
 * Event
 */
var Athens_Event = function () {};

Athens_Event.prototype = {
	/**
	 * User ID that this event definition belongs to
	 *
	 * @type {string}
	 */
	userId: null,



	/**
	 * Athens_Event name
	 *
	 * @type {string}
	 */
	name: null,



	/**
	 * Athens_Event.Date object
	 *
	 * @type {Athens_Event_Date}
	 */
	date: null,



	/**
	 * Default event start time. Can be overridden by custom date start/end time settings.
	 * See Athens_Event_Date_RepeatPattern for more.
	 *
	 * @type {string}
	 */
	start: null,



	/**
	 * Default event end time. Can be overridden by custom date start/end time settings.
	 * See Athens_Event_Date_RepeatPattern for more.
	 *
	 * @type {string}
	 */
	end: null
};