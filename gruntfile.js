// ./gruntfile.js
/**
 * @ngdoc interface
 * @name project.gruntfile
 * @description Grunt tasks interface module.
 */

/**
 * @function exports
 * @param grunt
 */
module.exports = function (grunt) {
  'use strict';

  // Load project settings
  var project = grunt.file.readJSON('project.json');

  // Load background Grunt tasks
  require('load-grunt-tasks')(grunt);

  // Set project settings
  grunt.project = project;

  // Needful configurations
  var bower         = require('./config/bower')(grunt);
  var clean         = require('./config/clean')(grunt);
  var copy          = require('./config/copy')(grunt);
  var cssmin        = require('./config/cssmin')(grunt);
  var express       = require('./config/express')(grunt);
  var filerev       = require('./config/filerev')(grunt);
  var htmlmin       = require('./config/htmlmin')(grunt);
  var jshint        = require('./config/jshint')(grunt);
  var ngAnnotate    = require('./config/ngAnnotate')(grunt);
  var ngdocs        = require('./config/ngdocs')(grunt);
  var parallel      = require('./config/parallel')(grunt);
  var preprocess    = require('./config/preprocess')(grunt);
  var requirejs     = require('./config/requirejs')(grunt);
  var sass          = require('./config/sass')(grunt);
  var svgmin        = require('./config/svgmin')(grunt);
  var uglify        = require('./config/uglify')(grunt);
  var useminPrepare = require('./config/useminPrepare')(grunt);
  var watch         = require('./config/watch')(grunt);

  // Init Grunt
  grunt.initConfig({});

  // Configure Grunt
  grunt.config('env'           , project.env);
  grunt.config('bower'         , bower);
  grunt.config('clean'         , clean);
  grunt.config('copy'          , copy);
  grunt.config('cssmin'        , cssmin);
  grunt.config('express'       , express);
  grunt.config('filerev'       , filerev);
  grunt.config('htmlmin'       , htmlmin);
  grunt.config('jshint'        , jshint);
  grunt.config('ngAnnotate'    , ngAnnotate);
  grunt.config('ngdocs'        , ngdocs);
  grunt.config('parallel'      , parallel);
  grunt.config('preprocess'    , preprocess);
  grunt.config('requirejs'     , requirejs);
  grunt.config('sass'          , sass);
  grunt.config('svgmin'        , svgmin);
  grunt.config('uglify'        , uglify);
  grunt.config('useminPrepare' , useminPrepare);
  grunt.config('watch'         , watch);

  // Load custom tasks
  grunt.loadTasks('basics');
  grunt.loadTasks('workflows');

};
