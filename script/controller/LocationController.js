/**
 * Location Controller
 */
var LocationController = function () {};

LocationController.prototype = {
	/**
	 * Create a new location using an Athens_Location model
	 *
	 * @param location     {Athens_Location}      The location to be created/written to DB
	 */
	make: function(location){
		//TODO: Stub method to create a location via Meteor's insertion calls
	},



	/**
	 * Retrieve an existing location set using a Mongo subset selector
	 *
	 * @param subset        {object}      The selection subset to get from the collection
	 */
	retrieve: function(subset){
		//TODO: Stub method to update a location via Meteor's update calls
	},



	/**
	 * Update an existing location set using a Mongo subset selector
	 *
	 * @param subset        {object}      The selection subset to get from the collection
	 */
	update: function(subset){
		//TODO: Stub method to update a location via Meteor's update calls
	},



	/**
	 * "Remove" an existing location using an Athens_Location model object -- this keeps the item in the DB but
	 * removes it from the account's list of locations. Essentially this enables undoable deletion
	 *
	 * @param location     {Athens_Location}      The location to be removed
	 */
	remove: function(location){
		//TODO: Stub method to update a location via Meteor's update calls
	},



	/**
	 * Delete an existing location using an Athens_Location model object -- this is not undoable and actually removes the
	 * location from the DB. See remove() for the more likely call to make
	 *
	 * @param location     {Athens_Location}      The location to be deleted
	 */
	delete: function(location){
		//TODO: Stub method to delete a location via Meteor's delete calls
	}
};