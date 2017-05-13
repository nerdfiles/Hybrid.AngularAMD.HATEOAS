// ./basics/add.js
/**
 * @ngdoc service
 * @name basics.module:add
 * @description Add properties to or elements to properties in project file.
 */
var fs = require('fs');

module.exports = function (grunt) {
  'use strict';

  /**
   * @ngdoc method
   * @methodOf basics.module:add
   * @name vendor
   * @description Add a vendor script or style to project environment variables.
   */
  grunt.task.registerTask('add/vendor', 'Add a vendor script or style', function () {

    var br = '\n';
    var prefix = '✅  ';

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
    var newVendor = v.join('');

    // Push vendor to project vendors array
    project[__layer__].push(newVendor);

    // Update project file
    var j = JSON.stringify(project, null, 2);
    var fp = __dirname + '/../project.json';

    try {
      grunt.file.write(fp, j, { encoding: 'utf8' });
    } catch (e) {
      return grunt.log.error(e);
    }

    grunt.log.write('Added to vendorScripts in project.json:' + br, prefix + newVendor);

  });

};
