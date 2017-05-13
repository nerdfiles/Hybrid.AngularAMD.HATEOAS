// ./workflows/develop.js
/**
 * @ngdoc service
 * @name workflows.module:develop
 * @description Develop workflow.
 */
module.exports = function (grunt) {

  /**
   * Development
   */
  grunt.registerTask('develop', [
    'parallel:develop'
  ]);

};
