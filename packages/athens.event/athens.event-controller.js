/**
 * Event Controller
 */
Athens_EventController = function (data) {
	Athens_Object.call(this, data);
};

Athens_EventController.prototype = Object.create(Athens_Object.prototype);
Athens_EventController.prototype.constructor = Athens_EventController;



/**
 * Create (write) a new event using an Athens_Event model object
 *
 * @param event     {Athens_Event}      The event to be created/written to DB
 *
 * @return          {string}            The id of the insert
 */
Athens_EventController.prototype.createEvent = function (event) {
	if(!(event instanceof Athens_Event)) {
		throw new TypeError("Cannot create new event. Invalid object passed - must be of type Athens_Event.");
	}
	//TODO: Needs non-happy-path handling
	//Parse properties off object to insert
	var insertObj = {};
	for (var prop in event) {
		if(event.hasOwnProperty(prop)){
			insertObj[prop] = event[prop];
		}
	}
	return Athens_col_event.insert(insertObj);
};



/**
 * Retrieve an existing event set using an Mongo subset selector
 *
 * @param subset        {object}      The selection subset to get from the collection
 */
Athens_EventController.prototype.findEvent = function (subset) {
	if(!subset){
		throw new Athens_ArgumentError("Cannot find event. No selection/specifier was passed.");
	}
	//TODO: Need to evaluate whether this should return the raw result of a failed find.
	return Athens_col_event.find(subset);
};



/**
 * Update an existing event set using an Mongo subset selector and data object
 *
 * @param selector          {object}        The selection subset to get from the collection
 *
 * @param modifier          {object}        The data to be updated
 *
 * @param callback          {function}      A callback function (optional)
 */
Athens_EventController.prototype.updateEvent = function (selector, modifier, callback) {
	if (!selector) {
		throw new Athens_ArgumentError("Cannot find event. No selection/specifier was passed.");
	}
	//TODO: Need to force only update of fields on the event object!!!
	Athens_col_event.update(selector, modifier, callback);
};



/**
 * "Remove" an existing event using an Athens_Event model object -- this keeps the item in the DB but removes it
 * from the user's list of events. Essentially this enables undoable deletion
 *
 * @param id     {string}      The mongo ID of the event to be "removed"
 */
Athens_EventController.prototype.removeEvent = function (id) {
	if (!id) {
		throw new Athens_ArgumentError("Cannot remove event. No id was passed.");
	}
	//TODO: Needs non-happy-path handling
	return Athens_col_event.update({_id: id}, {$set: {deleted: true}});
};



/**
 * Delete an existing event using an Athens_Event model object -- this is not undoable and actually removes the
 * event from the DB. See remove() for the more likely call to make
 *
 * @param event     {Athens_Event}      The event to be deleted
 */
Athens_EventController.prototype.deleteEvent = function (event) {};