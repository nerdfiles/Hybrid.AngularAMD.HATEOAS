// ./config/watch.js
/**
 * @ngdoc object
 * @name config.module:watch
 * @description watch config.
 */
module.exports = function (grunt) {
  'use strict';

  var objectInterface = {

    /**
     * @ngdoc property
     * @name build
     * @propertyOf config.module:watch
     * @description Develop files watcher.
     */
    build: {
      options: {
        livereload: 1337
      },
      files: [
        '<%= env.client %>/<%= env.clientScripts %>/*',
        '<%= env.client %>/<%= env.clientScripts %>/module/**/*',
        '<%= env.client %>/<%= env.clientScripts %>/section/**/*',
        '<%= env.client %>/<%= env.clientScripts %>/directive/**/*',
        '<%= env.client %>/<%= env.clientScripts %>/service/*',
        '<%= env.client %>/<%= env.clientScripts %>/component/**/*',
        '<%= env.client %>/<%= env.clientScripts %>/config/*',
        '<%= env.client %>/<%= env.clientScripts %>/filter/*',
        '<%= env.client %>/<%= env.clientScripts %>/<%= env.template %>/*',
        '<%= env.client %>/<%= env.clientStyles %>/**/*.css',
        '<%= env.client %>/<%= env.views %>/**/*',
        '<%= env.client %>/index.html',
        '<%= env.client %>/<%= env.clientScripts %>/<%= env.vendor %>/*',
        '<%= env.client %>/<%= env.clientStyles %>/<%= env.vendor %>/*'
      ],
      task: []
    },

    /**
     * @ngdoc property
     * @name develop
     * @propertyOf config.module:watch
     * @description Develop files watcher.
     */
    develop: {
      options: {
        spawn   : false,
        atBegin : true
      },
      files: [
        './server/base.js'
      ],
      tasks: ['express:develop']
    },

    /**
     * @ngdoc property
     * @name sass
     * @propertyOf config.module:watch
     * @description SASS files watcher.
     */
    sass: {
      files: [
        '<%= env.client %>/<%= env.clientStyles %>/**/*.scss'
      ],
      tasks: ['sass']
    }
  };

  return objectInterface;

};
