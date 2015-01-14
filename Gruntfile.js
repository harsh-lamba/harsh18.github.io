/*
* Harsh Gruntfile
* url
* @author Harsh
*/

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    project : {
      assets : 'assets',
      stylesheets : '<% project.assets %>/stylesheets',
      sassSrc : '<% project.stylesheets %>/bootstrap.scss'
    },
    uglify: {
      options: {
        //<% %> using this we can add config properties
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    },
    sass: {
      //For development purpose
      dev: {
        options: {
          style : 'expanded',
          compass : true;
        },
        files : {
          'build/style.css' : '<% project.sassSrc %>'
        }
      },
      //For production purpose
      dist: {
        options: {
          style : 'compressed',
          compass : true;
        },
        files: {
          'build/style.css' : '<% project.sassSrc %>'
        }
      }
    },
    watch: {
      css: {
        files: ['<% project.sassSrc %>', '<% project.stylesheets %>/**/*.scss'],
        tasks: ['sass:dev']
      }
    }
  });

  // Load the plugin that provides the "uglify, sass and watch" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['sass:dev', 'watch']);

};