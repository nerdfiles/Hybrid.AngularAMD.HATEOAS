// ./workflows/native.js
/**
 * @ngdoc service
 * @name workflows.module:native
 * @description Test workflows.
 */
module.exports = function (grunt) {

  /**
   * @name native/build/ios
   */
  grunt.registerTask('native/build/ios', [
    'cordovacli:build_ios'
  ]);

};

