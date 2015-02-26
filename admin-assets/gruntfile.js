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
		sass: {
			options: {
				sourceMap: true,
				outputStyle: 'compressed'
			},
			dist: {
				files: {
					'../webroot/css/admin/markdown_editor/style.css': 'src/style.scss'
				}
			}
		},
		watch: {
			main: {
				files: ['src/*.jsx'],
				tasks: ['browserify'],
				options: {
					interrupt: true
				}
			},
			style: {
				files: ['src/*.scss'],
				tasks: ['sass'],
				options: {
					interrupt: true
				}
			}
		}
	});

	grunt.registerTask('default', [
		'browserify',
		'uglify',
		'sass'
	]);

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-react');
	grunt.loadNpmTasks('grunt-browserify');
	grunt.loadNpmTasks('grunt-sass');

};
