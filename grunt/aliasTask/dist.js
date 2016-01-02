/**
 * Grunt task - dist
 *
 * Note: this task runs the dev alias task as well. It's best to have it all in sync.
 */
module.exports = function (grunt) {
    grunt.registerTask("dist", [
        //Run dev every time. When packaging for prod we
        //want both environments to be in sync.
        "dev",
        "sass:dist",
        "concat:dist",
        "copy:dist",
	    "uglify:dist"
    ]);
};