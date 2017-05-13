// ./workflows/build.js
/**
 * @ngdoc service
 * @name workflows.module:build
 * @description Build workflow.
 */
module.exports = function (grunt) {

  /**
   * Build
   */
  grunt.registerTask('build', [
    'jshint:build',
    'clean:build',
    'preprocess:build',
    'htmlmin:build',
    'cssmin:build',
    'requirejs:build',
    'copy:build'
  ]);

};
