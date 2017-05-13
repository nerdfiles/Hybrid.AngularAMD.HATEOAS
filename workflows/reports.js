// ./workflows/report.js
/**
 * @ngdoc service
 * @name workflows.module:report
 * @description Reports generation workflow.
 */
module.exports = function (grunt) {

  var exec = require('child_process').exec;

  /**
   * @ngdoc method
   * @methodOf workflows.module:report
   * @name complexity
   * @description A complexity/maintainability analysis report.
   * @example `$ grunt report/complexity`
   */
  grunt.task.registerTask('report/complexity', 'A complexity/maintainability analysis report', function () {

    exec('node ./utils/plato/base.js', function (error, stdout, stderr) {
      if (error) {
        console.log(error);
      }
    });
  });

};
