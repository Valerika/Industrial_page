module.exports = function(grunt) {

  grunt.initConfig({
    sass: {
      dist: {
        files: {
          'css/src/style_s.css': 'css/src/style_s.scss'
        }
      }
    },
    cssmin: {
      dist: {
        src: ['css/src/*.css'],
        dest: 'css/dist/style.min.css'
        }
    },
    concat: {
      options: {
        separator: ' '
      },
      js: {
        src: 'js/src/*.js',
        dest: 'js/dist/script.min.js'
      },
      css: {
        src: 'css/src/*.css',
        dest: 'css/dist/style.min.css'
      }
    },
    uglify: {
      dist: {
        src: ['js/dist/script.min.js'],
        dest: 'js/dist/script.min.js'
        }
      },
    watch: {
      scripts: {
        files: 'js/src/*.js',
        tasks: ['concat','uglify']
      },
      sass: {
        files: 'css/src/style_s.scss',
        tasks: ['sass','cssmin']
      },
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['sass','cssmin','concat','uglify','watch']);

};
