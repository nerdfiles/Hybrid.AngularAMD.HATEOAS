// ./basics/default.js
/**
 * @ngdoc service
 * @name basics.module:default
 * @description Default basic.
 */
module.exports = function (grunt) {
  'use strict';

  var headerBasics = '◎ 𝘽 𝘼 𝙎 𝙄 𝘾 𝙎';
  var headerWorkflows = '◉ 𝙒 𝙊 𝙍 𝙆 𝙁 𝙇 𝙊 𝙒 𝙎';
  var prefixOfList = '';
  var br = '\n';
  var l = ' ● ';
  var nl = '\n';

  Array.prototype.label = function (l) {
    var b = this.map(function (i) {
      return (l + i);
    });
    return b;
  };

  Array.prototype.prefix = function (p) {
    this.unshift(nl);
    return this;
  };

  Array.prototype.prepare = function (q) {
    this.push(q);
    return this.join(q);
  };

  var basics = [
    'default',
    '(add|remove)/vendor --layer=(style|script) --vendor=[bower_components/]path/to/file.(js|css)',
    'read/env'
  ].label(l).prefix(nl).prepare(nl);

  // Workflows
  var workflows = [
    'setup',
    'develop',
    'build(/platform)',
    'deploy',
    'test/(emulate|run|unit)',
    'native/(build/(ios|android)) # Try $ cd ./config/platforms',
    'docs',
    'report/complexity',
    'show/(control|link|discovery|value|attribution) TODO'
  ].label(l).prefix(nl).prepare(nl);

  /**
   * @ngdoc method
   * @methodOf basics.module:default
   * @name default
   * @description Display global tasks list.
   */
  grunt.registerTask('default', 'Silly tasks output', function () {
    grunt.log.write(nl + headerBasics, basics);
    grunt.log.write(br);
    grunt.log.write(headerWorkflows, workflows);
  });

};
