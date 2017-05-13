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
  grunt.task.registerTask('read/env', 'Read project environment variables', function () {
    var nl = '\n';
    grunt.log.write('Environment loaded: ' + nl, grunt.project);
  });

};
