// ./basics/add.js
/**
 * @ngdoc service
 * @name basics.module:add
 * @description Add properties to or elements to properties in project file.
 */
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
    var warning = '⚠️  ';

    var project = JSON.parse(grunt.file.read('./project.json', { encoding: 'utf8' }));
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
      return grunt.log.write(warning + 'Please specify a layer!');
    }

    // Prune base path from param
    var basePath = 'bower_components/';
    var v = vendor.split(basePath);
    var index = v.indexOf(basePath);
    if (index !== -1) {
      v.splice(index, 1);
    }
    var newVendor = v.join('');

    if (project[__layer__].indexOf(newVendor) !== -1) {
      return grunt.log.write(warning + 'Vendor already exists in build setup.');
    }

    var fileExists = grunt.file.exists(basePath + newVendor);
    var node_modules__Exists = /^node_modules/.test(newVendor);
    if (!fileExists && !node_modules__Exists) {
      return grunt.log.write(warning + 'Vendor does not exist. Try installing with $ bower install VENDOR_NAME');
    }

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
