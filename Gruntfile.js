//Gruntfile.js
module.exports = function(grunt){

  //Load Plugin(s)
  require('load-grunt-tasks')(grunt);

  //Project Configuration
  grunt.initConfig({
    express: {
      dev: {
        options :{
          script: './index.js',
          opts: ['--harmony']
        }
      }
    },
    watch: {
      express: {
        files: ['**/*.js'],     //Files to be watched
        tasks: ['express:dev'], //(Re)start the server
        options: {              //Server options
          spawn: false,         //Must have for reload
          livereload: true      //Enable LiveReload
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-express-server');

  //Register Task
  grunt.registerTask('default', ['express:dev','watch']);
};
