// ./config/requirejs.js
/**
 * @ngdoc object
 * @name config.module:requirejs
 * @description requirejs config.
 */
module.exports = function (grunt) {
  'use strict';

  var modules = [
    { name: 'boot' },
    {
      name    : 'module/home/index',
      exclude : ['boot']
    },
    {
      name    : 'module/settings/index',
      exclude : ['boot']
    }
  ];

  var objectInterface = {

    /**
     * @ngdoc property
     * @name build
     * @propertyOf config.module:requirejs
     * @description Build task.
     */
    build: {
      options: {
        baseUrl                : '<%= env.client %>/<%= env.clientScripts %>',
        mainConfigFile         : '<%= env.client %>/<%= env.clientScripts %>/boot.js',
        removeCombined         : true,
        findNestedDependencies : true,
        optimize               : 'none',
        dir                    : '<%= env.build %>/<%= env.clientScripts %>/',
        modules                : modules
      }
    }
  };

  return objectInterface;
};
