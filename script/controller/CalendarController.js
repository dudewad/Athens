/**
 * CalendarController
 */
var CalendarController = function () {};

CalendarController.prototype = {
	/**
	 * Create a new calendar using an Athens_Calendar model object
	 *
	 * @param calendar  {Athens_Calendar}      The calendar to be created/written to DB
	 */
	create: function(calendar){
		//TODO: Stub method to create a calendar via Meteor's insertion calls
	},



	/**
	 * Retrieve an existing calendar using an Mongo subset selector
	 *
	 * @param subset        {object}      The selection subset to get from the collection
	 */
	retrieve: function(subset){
		//TODO: Stub method to update a calendar via Meteor's update calls
	},



	/**
	 * Update an existing calendar set using an Mongo subset selector
	 *
	 * @param subset        {object}      The selection subset to get from the collection
	 */
	update: function(subset){
		//TODO: Stub method to update a calendar via Meteor's update calls
	},



	/**
	 * "Remove" an existing calendar using an Athens_Calendar model object -- this keeps the item in the DB but removes it
	 * from the user's list of calendars. Essentially this enables undoable deletion
	 *
	 * @param calendar     {Athens_Calendar}      The calendar to be removed
	 */
	remove: function(calendar){
		//TODO: Stub method to update a calendar via Meteor's update calls
	},



	/**
	 * Delete an existing calendar using an Athens_Calendar model object -- this is not undoable and actually removes the
	 * calendar from the DB. See remove() for the more likely call to make
	 *
	 * @param calendar     {Athens_Calendar}      The calendar to be deleted
	 */
	delete: function(calendar){
		//TODO: Stub method to delete a calendar via Meteor's delete calls
	}
};