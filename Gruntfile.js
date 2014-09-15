'use strict';

module.exports = function (grunt) {

	// Project configuration.
	grunt.initConfig({
		mochacli: {
			options: {
				//env: 'test',
				//globals: ['should'],
				//require: ['should'],
				files: 'test/*.js',
				ui: 'bdd'
			},
			test: {
				options: {
					reporter: 'tap'
				}
			},
			doc: {
				options: {
					save: 'doc/content.out',
					reporter: 'doc'
				}
			},
			coverage: {
				options: {
					save: 'doc/coverage.html',
					reporter: 'html-cov'
				}
			}
		},
		concat: {
			options: {
				separator: '\n'
			},
			doc: {
				src: ['doc/header.html', 'doc/content.out', 'doc/footer.html'],
				dest: 'doc/index.html'
			}
		},
		jshint: {
			options: {},
			gruntfile: {
				src: 'Gruntfile.js',
				options: {
					jshintrc: 'lib/.jshintrc'
				}
			},
			lib: {
				src: ['lib/*.js', 'lib/**/*.js'],
				options: {
					jshintrc: 'lib/.jshintrc'
				}
			},
			test: {
				src: ['test/*.js', 'test/**/*.js'],
				options: {
					jshintrc: 'test/.jshintrc'
				}
			}
		},
		watch: {
			gruntfile: {
				files: ['lib/*.js', 'lib/**/*.js'],
				tasks: ['jshint:gruntfile']
			},
			lib: {
				files: ['lib/*.js', 'lib/**/*.js'],
				tasks: ['jshint:lib']
			},
			test: {
				files: ['test/*.js', 'test/**/*.js'],
				tasks: ['jshint:test', 'mochacli:test']
			}
		},
		jscoverage: {
			src: {
				expand: true,
				cwd: 'lib/',
				src: ['**/*.js'],
				dest: 'lib-cov/',
				ext: '.js'
			}
		},
		clean: {
			entity: {
				src: 'public/js/entity/**/*.js'
			},
			build: {
				src: 'build/'
			},
			tmp: {
				src: 'tmp/'
			},
			bower: {
				src: ['public/bower', 'public/**/bower']
			}
		}
	});

	// These plugins provide necessary tasks.
	grunt.loadNpmTasks('grunt-mocha-cli');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-jscoverage');

	// Default task.
	grunt.registerTask('default', ['jshint', 'mochacli:test']);
	grunt.registerTask('doc', ['mochacli:doc', 'concat:doc']);
	grunt.registerTask('cov', ['jscoverage', 'mochacli:coverage']);

};
