/**
 * EventController
 */
var EventController = function () {};

EventController.prototype = {
	/**
	 * Create a new event using an Athens_Event model object
	 *
	 * @param event     {Athens_Event}      The event to be created/written to DB
	 */
	make: function(event){
		//TODO: Stub method to create an event via Meteor's insertion calls
	},



	/**
	 * Retrieve an existing event set using an Mongo subset selector
	 *
	 * @param subset        {object}      The selection subset to get from the collection
	 */
	retrieve: function(subset){
		//TODO: Stub method to update an event via Meteor's update calls
	},



	/**
	 * Update an existing event set using an Mongo subset selector
	 *
	 * @param subset        {object}      The selection subset to get from the collection
	 */
	update: function(subset){
		//TODO: Stub method to update an event via Meteor's update calls
	},



	/**
	 * "Remove" an existing event using an Athens_Event model object -- this keeps the item in the DB but removes it
	 * from the user's list of events. Essentially this enables undoable deletion
	 *
	 * @param event     {Athens_Event}      The event to be removed
	 */
	remove: function(event){
		//TODO: Stub method to update an event via Meteor's update calls
	},



	/**
	 * Delete an existing event using an Athens_Event model object -- this is not undoable and actually removes the
	 * event from the DB. See remove() for the more likely call to make
	 *
	 * @param event     {Athens_Event}      The event to be deleted
	 */
	delete: function(event){
		//TODO: Stub method to delete an event via Meteor's delete calls
	}
};