// ./basics/show.js
/**
 * @ngdoc service
 * @name basics.module:show
 * @description Show basic.
 */
module.exports = function (grunt) {

  /**
   * @ngdoc method
   * @methodOf basics.module:show
   * @name show/env
   * @description Show project environment variables.
   */
  grunt.task.registerTask('show/env', 'Show project environment variables', function () {
    var nl = '\n';
    grunt.log.write('Environment loaded: ' + nl, grunt.project);
  });

};
