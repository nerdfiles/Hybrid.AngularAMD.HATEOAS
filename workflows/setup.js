// ./workflows/setup.js
/**
 * @ngdoc service
 * @name workflows.module:setup
 * @description Setup workflow.
 */
module.exports = function (grunt) {

  /**
   * Setup
   */
  grunt.registerTask('setup', [
    'bower:setup',
    'copy:setup'
  ]);

};
