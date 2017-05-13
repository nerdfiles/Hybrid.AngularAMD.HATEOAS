// ./basics/default.js
/**
 * @ngdoc service
 * @name basics.module:default
 * @description Default basic.
 */
module.exports = function (grunt) {

  // Tasks
  var tasks = [
    'setup',
    'develop',
    'build',
    'deploy',
    'docs'
  ];

  /**
   * @ngdoc method
   * @methodOf basics.module:default
   * @name default
   * @description Display global tasks list.
   */
  grunt.registerTask('default', function () {
    grunt.log.write('Tasks:', tasks);
  });

};
