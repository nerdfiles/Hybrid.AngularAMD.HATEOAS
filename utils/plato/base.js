// ./utils/plato/base.js
/**
 * @ngdoc service
 * @name utils.module:plato
 * @description Static analysis reporting tool for JS.
 */
var plato = require('plato');

var files = [
  './client/scripts/boot.js',
  './client/scripts/interface.js',
  './client/scripts/route.js',
  './client/scripts/directive/**',
  './client/scripts/filter/**',
  './client/scripts/module/**',
  './client/scripts/config/**',
  './client/scripts/service/**'
];

var outputDir = './reports/complexity';
var options = {
  title: 'Hybrid.angularAMD.HATEOAS'
};

var postGenerate = function (report) {
  console.log('Generated complexity report!');
};

plato.inspect(files, outputDir, options, postGenerate);
