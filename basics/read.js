// ./basics/read.js
/**
 * @ngdoc service
 * @name basics.module:read
 * @description Read basic.
 */
module.exports = function (grunt) {

  /**
   * @ngdoc method
   * @methodOf basics.module:read
   * @name read/env
   * @description Read project environment variables.
   */
  grunt.registerTask('read/env', function () {
    grunt.log.write('Environment loaded:', grunt.project);
  });

};
