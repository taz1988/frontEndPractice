module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    meta: {
      version: '0.1.0'
    },
    banner: '/*! PROJECT_NAME - v<%= meta.version %> - ' +
      '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
      '* http://PROJECT_WEBSITE/\n' +
      '* Copyright (c) <%= grunt.template.today("yyyy") %> ' +
      'YOUR_NAME; Licensed MIT */\n',
    // Task configuration.
    clean: {
      folder: ['dist/**'],
    },
    concat: {
      options: {
        stripBanners: true
      },
      js: {
        src: ['assets/js/*.js'],
        dest: 'dist/main.js'
      }
    },
    cssmin: {
      options: {
        mergeIntoShorthands: false,
        roundingPrecision: -1
      },
      target: {
        files: {
          'dist/main.css': ['assets/css/*.css']
        }
      }
    },
    sass: {
     dist: {
       options: {
         // includePaths: require('node-normalize-scss').with('other/path', 'another/path')
         // - or -
         includePaths: require('node-normalize-scss').includePaths
       },
       files: {
          'dist/main.css' : 'dist/main.css'
       }
     }
   },
    uglify: {
      options: {
        compress: true,
        mangle: {
          reserved: ['jQuery', 'document']
        }
      },
      files: {
         expand: true,
         dest: '',
         src: ['dist/main.js']
      }
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        unused: true,
        boss: true,
        eqnull: true,
        esversion: 6,
        globals: {
          jQuery : false,
          document: false,
          require : false,
          module: false
        }
      },
      gruntfile: {
        src: 'Gruntfile.js'
      },
      files: {
        src: ['assets/js/*.js']
      },
    },
    processhtml: {
    options: {
      process: true,
      data: {
        message : 'main.js'
      }
    },
    dist: {
      files: {
        'dist/index.html': ['index.html']
      }
    }
  }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-processhtml');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-clean');

  // Default task.
  grunt.registerTask('default', ['clean', 'jshint', 'concat', 'uglify', 'cssmin', 'processhtml']);

};
