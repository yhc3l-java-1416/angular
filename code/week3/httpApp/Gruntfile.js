'use strict';

module.exports = function (grunt) {
	grunt.loadNpmTasks('grunt-angular-templates');
	grunt.loadNpmTasks('grunt-ng-annotate');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		ngtemplates: {
			myComponents: {
				src: 'src/**/*.html',
				dest: 'src/app.templates.js',
				options: {
					htmlmin: {
						collapseBooleanAttributes: true,
						collapseWhitespace: true,
						removeAttributeQuotes: true,
						removeComments: true, // Only if you don't use comment directives! 
						removeEmptyAttributes: true,
						removeRedundantAttributes: true,
						removeScriptTypeAttributes: true,
						removeStyleLinkTypeAttributes: true
					}
				}
			}
		},
		ngAnnotate: {
			options: {
				singleQuotes: true,
			},
			myComponents: {
				files: [{
					expand: true,
					src: 'src/**/*.js',
				}],
			}
		},
		concat: {
			options: {
				stripBanners: true,
				process: function (src, filepath) {
					return '// Source: ' + filepath + '\n' +
						src.replace(/(^|\n)[ \t]*('use strict'|"use strict");?\s*/g, '$1');
				},
			},
			dist: {
				src: ['src/**/*.js'],
				dest: 'dist/my-components.js',
			},
		},
		uglify: {
			comp: {
				options: {
					compress: {
						drop_console: true
					},
					stripBanners: true,
					banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
						'<%= grunt.template.today("yyyy-mm-dd") %> */\n' +
						'"use strict";',
				},
				files: {
					'dist/my-components.min.js': ['dist/my-components.js']
				}
			},
			conc: {
				options: {
					banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
						'<%= grunt.template.today("yyyy-mm-dd") %> */\n' +
						'"use strict";\n\n',
					beautify: true,
					compress: false,
					mangle: false
				},
				files: {
					'dist/my-components.js': ['dist/my-components.js']
				}
			}
		}
	});
	grunt.registerTask('default', ['ngtemplates', 'ngAnnotate', 'concat', 'uglify']);
};