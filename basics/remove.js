// ./basics/remove.js
/**
 * @ngdoc service
 * @name basics.module:remove
 * @description Remove properties from or elements within properties in project file.
 */
var fs = require('fs');
var q = require('q');

module.exports = function (grunt) {
  'use strict';

  /**
   * @ngdoc method
   * @methodOf basics.module:remove
   * @name vendor
   * @description Remove a vendor script or style from project environment variables.
   */
  grunt.task.registerTask('remove/vendor', 'Remove a vendor script or style', function () {

    var br = '\n';
    var prefix = '🚫  ';

    var removeFile = function (element) {
      var defer = q.defer();
      if (element !== -1) {
        defer.resolve(true);
      } else {
        defer.reject(false);
      }
      return defer.promise;
    };

    var project = JSON.parse(fs.readFileSync('./project.json', 'utf8'));
    var vendor = grunt.option('vendor');
    var layer = grunt.option('layer');
    var layerScripts = 'vendorScripts';
    var layerStyles = 'vendorStyles';
    var __layer__;

    if (layer === 'style') {
      __layer__ = layerStyles;
    } else if (layer === 'script') {
      __layer__ = layerScripts;
    } else {
      return grunt.log.error('Please specify a layer!');
    }

    // Prune base path from param
    var basePath = 'bower_components/';
    var v = vendor.split(basePath);
    var index = v.indexOf(basePath);
    if (index !== -1) {
      v.splice(index, 1);
    }
    var rmVendor = v.join('');

    // Find vendor script or style to be removed and remove it
    var rmIndex = project[__layer__].indexOf(rmVendor);
    removeFile(rmIndex).then(function () {
      project.vendorScripts.splice(rmIndex, 1);

      // Update project file
      var j = JSON.stringify(project, null, 2);
      var fp = __dirname + '/../project.json';

      try {
        grunt.file.write(fp, j, { encoding: 'utf8' });
      } catch (e) {
        return grunt.log.error(e);
      }

      grunt.log.write('Removed from vendorScripts in project.json:' + br, prefix + rmVendor);

    }, function () {
      grunt.log.write('No vendor found.');
    });

  });

};
