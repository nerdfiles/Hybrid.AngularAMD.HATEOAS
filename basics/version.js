// ./basics/version.js
/**
 * @ngdoc service
 * @name basics.module:version
 * @description Version basic.
 */
module.exports = function (grunt) {

  /**
   * @ngdoc method
   * @methodOf basics.module:version
   * @name version
   * @description Version project.
   */
  grunt.registerTask('touch/version', ['bump']);

};
