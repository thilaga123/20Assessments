var gulp = require('gulp');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var headerfooter = require('gulp-headerfooter');
const minify = require('gulp-minify');


gulp.task('copy', async function() {
  gulp.src('core/core.config.local.tpl.js')
    .pipe(rename({ basename: 'core.config'}))
    .pipe(gulp.dest('core'));
});


sass.compiler = require('node-sass');
 
gulp.task('compile', function () {
  return gulp.src('core/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('core/*.scss', ['sass']);
})


gulp.task('concat', async function() {
  console.log("Concating and moving all the css files in styles folder");
  gulp.src("core/**.css")
      .pipe(concat('main.css'))
      .pipe(gulp.dest('dist/css'));
});

 
gulp.task('headerfooter', async function () {
    gulp.src('core/content/*.html')
        .pipe(headerfooter.header('<html><body>'))
        .pipe(headerfooter.footer('</body></html>'))
        .pipe(gulp.dest('dist/'));
});

 
gulp.task('minify', async function() {
  gulp.src(['core/*.js', 'core/*.mjs'])
    .pipe(minify())
    .pipe(gulp.dest('dist'))
});