module.exports = function(grunt) {

  var pkg = grunt.file.readJSON('package.json');

  grunt.initConfig({
    browserify: {
      options: {
        transform: [
          require('grunt-react').browserify
        ]
      },
      main: {
        src: 'src/main.jsx',
        dest: '../webroot/js/admin/markdown_editor/main.js'
      }
    },
    uglify: {
      options: {
        sourceMap: true
      },
      dist: {
        src: '../webroot/js/admin/markdown_editor/main.js',
        dest: '../webroot/js/admin/markdown_editor/main.min.js'
      }
    },
    watch: {
      main: {
        files: ['src/*.jsx'],
        tasks: ['browserify'],
        options: {
          interrupt: true
        }
      }
    }
  });

  grunt.registerTask('default', [
    'browserify',
    'uglify'
  ]);

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-react');
  grunt.loadNpmTasks('grunt-browserify');

};
