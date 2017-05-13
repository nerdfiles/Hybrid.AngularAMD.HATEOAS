// ./workflows/report.js
/**
 * @ngdoc service
 * @name workflows.module:report
 * @description Reports generation workflow.
 */
module.exports = function (grunt) {

  var exec = require('child_process').exec;

  /**
   * Report
   * @description A complexity/maintainability analysis report.
   */
  grunt.task.registerTask('report/complexity', 'A complexity/maintainability analysis report', function () {

    exec('node ./utils/plato/base.js', function (error, stdout, stderr) {
      if (error) {
        console.log(error);
      }
    });
  });

};
