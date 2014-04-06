// Karma configuration
// Generated on Sun Apr 06 2014 01:12:32 GMT+0200 (Central Europe Daylight Time)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['qunit'],


    // list of files / patterns to load in the browser
    files: [
    	'app/bower_components/jquery/jquery.js',
        'app/bower_components/handlebars/handlebars.runtime.js',
        'app/bower_components/ember/ember.js',
        'app/bower_components/ember-data/ember-data.js',

        '.tmp/scripts/compiled-templates.js',
        '.tmp/scripts/combined-scripts.js',

        'app/bower_components/bootstrap-sass/js/affix.js',
        'app/bower_components/bootstrap-sass/js/alert.js',
        'app/bower_components/bootstrap-sass/js/dropdown.js',
        'app/bower_components/bootstrap-sass/js/tooltip.js',
        'app/bower_components/bootstrap-sass/js/modal.js',
        'app/bower_components/bootstrap-sass/js/transition.js',
        'app/bower_components/bootstrap-sass/js/button.js',
        'app/bower_components/bootstrap-sass/js/popover.js',
        'app/bower_components/bootstrap-sass/js/carousel.js',
        'app/bower_components/bootstrap-sass/js/scrollspy.js',
        'app/bower_components/bootstrap-sass/js/collapse.js',
        'app/bower_components/bootstrap-sass/js/tab.js',

	    'test/support/*.js',
	    'test/spec/*.js',
	    'test/integration/*.js'
    ],


    // list of files to exclude
    exclude: [
      
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  });
};
