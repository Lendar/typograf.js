module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-simple-mocha');

  grunt.initConfig({
    jshint: {
      all: [
        '*.js'
      ]
    },
    simplemocha: {
      all: [
        'test/**/*.js'
      ]
    }
  });

  grunt.registerTask('default', ['jshint', 'simplemocha']);
};
