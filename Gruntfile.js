module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // LESS
    less: {
      dev: {
        options: {
          paths: ['assets']
        },
        files: {
          'assets/src/styles/styles.css': 'assets/src/styles/styles.less'
        }
      }
    },

    // CSSMIN
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'assets/src/styles',
          src: ['*.css', '!*.min.css'],
          dest: 'assets/dist/styles',
          ext: '.min.css'
        }]
      }
    },

    // WATCH
    watch: {
      styles: {
        files: ['assets/src/styles/styles.less'],
        tasks: ['less:dev', 'cssmin']
      },      
    },

  });

  // Register Tasks
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['less:development', 'cssmin']);
  grunt.registerTask('styles', ['less:development', 'cssmin']);

};