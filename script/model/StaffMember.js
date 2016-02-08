/**
 * Athens_StaffMember
 */
var Athens_StaffMember = function () {};

Athens_StaffMember.prototype = {
	/**
	 * The ID of the staff member object
	 *
	 * @type string
	 */
	staffID: "",



	/**
	 * The email address of the staff member
	 *
	 * @type string
	 */
	email: "",



	/**
	 * The name of the staff member
	 *
	 * @type string
	 */
	name: "",



	/**
	 * Password Hash of the staff member
	 *
	 * @type string
	 */
	password: "",



	/**
	 * A list of service IDs that this staff member provides
	 *
	 * @type Array
	 */
	service: []
};