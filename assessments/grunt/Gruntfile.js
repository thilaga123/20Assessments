module.exports = function(grunt){
 
 grunt.initConfig({
  copy: {
      js: {
          files: [
              { src: 'js/one.js', dest: 'build/' }
          ]
      }
     },
  jshint: {
      files: ['Gruntfile.js', 'js/*.js'],
      options: {
        globals: {
          jQuery: true
        }
      }
    },
 watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint']
    },
    concat: {
     options: {
       separator: '',
     },
     dist: {
       src: ['js/one.js', 'js/two.js'],
       dest: 'build/concat.js',
     },
   },

'string-replace': {
 logo: {
     files: [{
         src: 'htmls/**.html',
         dest: 'samples/'
     }],
     options: {
         replacements: [{
             pattern: '<body>',
             replacement: '<body><header>Header inserted ...</header>'
         },
         {
          pattern: '</body>',
          replacement: '<footer>Footer inserted ...</footer></body>'
      }]
     }
 }
},
    uglify : {

        options : {
            banner : "/*! app.min.js file */\n"
        },
        build : {
            src : ["js/app.js"],
            dest : "dist/app.min.js"
        }

    }



 });


grunt.loadNpmTasks('grunt-contrib-jshint');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-concat');
 grunt.loadNpmTasks('grunt-contrib-copy');
 grunt.loadNpmTasks('grunt-string-replace');
 grunt.loadNpmTasks('grunt-contrib-uglify');

 grunt.registerTask('default', ['jshint']);
 grunt.registerTask('build', ['copy:js']);
 grunt.registerTask('add-header-footer', 'string-replace');
 grunt.registerTask("minify", ["uglify"]);

};