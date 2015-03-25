module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      all: ['Gruntfile.js', 'src/**/*.js', 'spec/**/*.js']
    },

    mocha_casperjs: {
      options: {},
      files: {
        src: ['test/**/*']
      }
    },

  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-mocha-casperjs');

  grunt.registerTask('default', ['jshint', 'mocha-casperjs']);

};
