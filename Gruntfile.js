module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // LESS
    less: {
      development: {
        options: {
          paths: ['assets'],
          strictUnits: true,
          sourceMap: true,
        },
        files: {
          'assets/dist/styles/styles.css': 'assets/src/styles/styles.less'
        }
      }
    },

    // CSSMIN
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'assets/dist/styles',
          src: ['*.css', '!*.min.css'],
          dest: 'assets/dist/styles',
          ext: '.min.css'
        }]
      }
    },

    // WATCH
    watch: {
      styles: {
        files: ['assets/src/styles/styles.less', 'assets/src/styles/particles/*.less'],
        tasks: ['less:development', 'cssmin']
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