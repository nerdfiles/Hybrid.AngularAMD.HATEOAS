// ./workflows/test.js
/**
 * @ngdoc service
 * @name workflows.module:test
 * @description Test workflows.
 */
module.exports = function (grunt) {

  /**
   * test/unit
   */
  grunt.registerTask('test/unit', [
    'karma'
  ]);

};

