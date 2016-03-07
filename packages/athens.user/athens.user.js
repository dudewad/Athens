/**
 * User
 */
Athens_User = function (data) {
	Athens_Object.call(this, data, []);
};

Athens_User.prototype = Object.create(Athens_Object.prototype);
Athens_User.prototype.constructor = Athens_User;



/**
 * Database ID, if there is one
 *
 * @type {string}
 */
Athens_User.prototype._id = null;



/**
 * The account email address list.
 *
 * @type {Array}
 */
Athens_User.prototype.email = [];



/**
 * Hash of user password
 *
 * @type {string}
 */
Athens_User.prototype.password = "";