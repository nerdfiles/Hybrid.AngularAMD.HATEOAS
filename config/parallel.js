// ./config/parallel.js
/**
 * @ngdoc object
 * @name config.module:parallel
 * @description parallel config.
 */
module.exports = function (grunt) {
  'use strict';

  var tasks = [
    {
      grunt: true,
      args: ['watch:build']
    },
    {
      grunt: true,
      args: ['watch:sass']
    },
    {
      grunt: true,
      args: ['watch:develop']
    }
  ];

  var objectInterface = {

    /**
     * @ngdoc property
     * @name develop
     * @propertyOf config.module:parallel
     * @description Develop configuration.
     */
    develop: {

      options: {
        stream: true
      },

      tasks: tasks
    }
  };

  return objectInterface;
};
