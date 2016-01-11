/**
 * Event_Date
 */
var Athens_Event_Date = function () {
};

Athens_Event_Date.prototype = {
	/**
	 * The start date for the event
	 *
	 * @type {Date}
	 */
	start: null,



	/**
	 * Whether or not the event repeats
	 *
	 * @type {Boolean}
	 */
	repeat: null,



	/**
	 * Pattern that this Athens_Event_Date object should use to repeat with. Required if "repeat" is true.
	 *
	 * @type {Array}        An array of Athens_Event_Date_RepeatPattern objects.
	 */
	repeatPattern: null,



	/**
	 * The end date for the event. Only settable if "repeat" is true. If not set and "repeat" is true, then the event
	 * will be inferred to repeat forever.
	 *
	 * @type {Date}
	 */
	end: null
};