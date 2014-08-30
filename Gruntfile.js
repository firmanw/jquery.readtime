module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		qunit: {
			all: 'test/index.html'
		},
		jshint: {
			grunt: 'Gruntfile.js',
			npm: 'package.json',
			bower: 'bower.json',
			source: 'src/**/*.js',
			tests: 'test/**/*.js',
			options: {
				jshintrc: true
			}
		},
		uglify: {
			main: {
				files: {
					'dist/jquery.readtime.min.js': ['src/jquery.readtime.js']
				}
			},
			options: {
				preserveComments: 'some',
				report: 'min'
			}
		},
		watch: {
			files: '{src,test}/**/*.js',
			tasks: 'default',
			options: {
				livereload: true
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-qunit');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['qunit', 'jshint', 'uglify']);
};
