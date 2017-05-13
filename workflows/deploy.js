// ./workflows/deploy.js
/**
 * @ngdoc service
 * @name workflows.module:deploy
 * @description Deploy workflow.
 */
module.exports = function (grunt) {

  /**
   * Deployment
   */
  grunt.registerTask('deploy', [
    'build',
    'clean:deploy',
    'htmlmin:deploy',
    'newer:uglify:deploy',
    'copy:deploy'
  ]);


};
