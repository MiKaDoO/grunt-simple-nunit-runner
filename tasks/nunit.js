/*
 * grunt-simple-nunit-runner
 * https://github.com/MiKaDoO/grunt-simple-nunit-runner
 *
 * Copyright (c) 2015 Mickael Metesreau
 * Licensed under the MIT license.
 */

 'use strict';

 var bridge = require('./bridge.js'),
 path = require('path');

 module.exports = function(grunt) {

  grunt.registerMultiTask('nunit', 'Run nunit tests',  function() {
    this.files.forEach(function(f) {

      f.src.forEach(function (src) {
        var dllAbsolutePath = path.join(path.resolve(),src);

        bridge()(dllAbsolutePath, function(error, result) {
          if (error) {
            throw error;
          }

          var indent = '    ';

          var completeds =  result.completed;

          grunt.log.writeln((completeds.length + ' tests completed').green);

          completeds.forEach(function(completed) {
            grunt.log.writeln(indent + completed.name.green + ' ('+completed.time+'s)');
          });

          var errors =  result.errors;

          grunt.log.writeln((errors.length + ' tests failed').red);

          errors.forEach(function(error) {
            grunt.log.writeln(indent + error.name.red + ' ('+error.time+'s) : ');
            grunt.log.writeln(indent + indent + error.message.replace(/(\r\n|\n|\r)/gm,""));
          });

        });
      });
    });
  });
};