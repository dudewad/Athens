/**
 * Account Controller
 */
var AccountController = function () {};

AccountController.prototype = {
	/**
	 * Create a new account using an Athens_Account model
	 *
	 * @param staffMember     {Athens_StaffMember}      The event to be created/written to DB
	 */
	make: function(staffMember){
		//TODO: Stub method to create an event via Meteor's insertion calls
	},



	/**
	 * Retrieve an existing staff member set using a Mongo subset selector
	 *
	 * @param subset        {object}      The selection subset to get from the collection
	 */
	retrieve: function(subset){
		//TODO: Stub method to update an event via Meteor's update calls
	},



	/**
	 * Update an existing staff member set using a Mongo subset selector
	 *
	 * @param subset        {object}      The selection subset to get from the collection
	 */
	update: function(subset){
		//TODO: Stub method to update an event via Meteor's update calls
	},



	/**
	 * "Remove" an existing staff member using an Athens_StaffMember model object -- this keeps the item in the DB but
	 * removes it from the account's list of staff members. Essentially this enables undoable deletion
	 *
	 * @param staffMember     {Athens_StaffMember}      The staff member to be removed
	 */
	remove: function(staffMember){
		//TODO: Stub method to update an event via Meteor's update calls
	},



	/**
	 * Delete an existing staff member using an Athens_StaffMember model object -- this is not undoable and actually removes the
	 * staff member from the DB. See remove() for the more likely call to make
	 *
	 * @param staffMember     {Athens_StaffMember}      The staff member to be deleted
	 */
	delete: function(staffMember){
		//TODO: Stub method to delete an event via Meteor's delete calls
	}
};