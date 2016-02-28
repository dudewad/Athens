/**
 * Event
 *
 * @throws  Error       Throws error if called as a function instead of a constructor with the 'new' keyword
 *          Error       Throws error if the data object passed contains a key not present in the object prototype
 */
Athens_Event = function (data) {
	Athens_Object.call(this, data);
};

Athens_Event.prototype = Object.create(Athens_Object.prototype);
Athens_Event.prototype.constructor = Athens_Event;



/**
 * User ID that this event definition belongs to
 *
 * @type {string}
 */
Athens_Event.prototype.userId = null;



/**
 * Event name
 *
 * @type {string}
 */
Athens_Event.prototype.eventName = "testing";



/**
 * Athens_Event_Date object
 *
 * @type {Athens_Event_Date}
 */
Athens_Event.prototype.date = null;



/**
 * Default event start time. Can be overridden by custom date start/end time settings.
 * See Athens_Event_Date_RepeatPattern for more.
 *
 * @type {string}
 */
Athens_Event.prototype.start = null;



/**
 * Default event end time. Can be overridden by custom date start/end time settings.
 * See Athens_Event_Date_RepeatPattern for more.
 *
 * @type {string}
 */
Athens_Event.prototype.end = null;