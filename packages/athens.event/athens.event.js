/**
 * Event
 */
Athens_Event = function (data) {
	for (var prop in data) {
		if(data.hasOwnProperty(prop) && (prop in this)){
			this[prop] = data[prop];
		}
	}
};

Athens_Event.prototype = {
	/**
	 * User ID that this event definition belongs to
	 *
	 * @type {string}
	 */
	userId: null,



	/**
	 * Event name
	 *
	 * @type {string}
	 */
	name: "testing",



	/**
	 * Athens_Event_Date object
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