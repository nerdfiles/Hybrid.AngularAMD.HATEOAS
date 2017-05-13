// ./workflows/docs.js
/**
 * @ngdoc service
 * @name workflows.module:docs
 * @description Docs generation workflow.
 */
module.exports = function (grunt) {

  /**
   * Documentation
   */
  grunt.registerTask('docs', [
    'ngdocs'
  ]);

};
