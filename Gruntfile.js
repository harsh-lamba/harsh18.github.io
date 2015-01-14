/*
* Harsh Gruntfile
* url
* @author Harsh
*/
'use strict';


module.exports = function(grunt) {
  //Loading packages using matchdep package
  require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);
  grunt.initConfig({
    
    pkg: grunt.file.readJSON('package.json'),
    
    project : {
      app : 'app', 
      assets : '<%= project.app %>/assets',
      stylesheets : '<%= project.assets %>/sass'
    },
    
    //Watch
    watch: {
      sass: {
        files: ['<%= project.stylesheets %>/**/*.scss', '<%= project.stylesheets %>/main.scss'],
        //files: ['sass/**/*.{scss,sass}','sass/_partials/**/*.{scss,sass}'],
        tasks: ['sass:dist']
      },
      livereload: {
        files: ['*.html', '*.php', 'js/**/*.{js,json}', 'css/*.css','img/**/*.{png,jpg,jpeg,gif,webp,svg}'],
        options: {
          livereload: true
        }
      }
    },
    
    //Sass Compiling
    sass: {
      options: {
        sourceMap: true,
        //outputStyle: 'compressed'
      },
      dev: {
        options: {
          style : 'expanded',
        },
        files : {
          'build/style.css' : '<%= project.stylesheets %>/main.scss'
        }
      },
      dist: {
        options : {
          outputStyle: 'compressed'  
        },
        files: {
          'build/style.css' : '<%= project.stylesheets %>/main.scss'
        }
      }
    }, 

    htmlhint: {
    build: {
      options: {
          'tag-pair': true,
          'tagname-lowercase': true,
          'attr-lowercase': true,
          'attr-value-double-quotes': true,
          'doctype-first': true,
          'spec-char-escape': true,
          'id-unique': true,
          'head-script-disabled': true,
          'style-disabled': true
      },
      src: ['index.html']
    }
}
  });

  grunt.registerTask('default', [
    'sass:dev',
    //'htmlhint',
    'watch'
  ]);
};