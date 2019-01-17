var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

gulp.task('sass', function(){
  return gulp.src('src/scss/cookie-cutter.scss')

    .pipe(sass({outputStyle: 'compressed'})) // Using gulp-sass
    .pipe(gulp.dest('dist/css'))
});


gulp.task('scripts', function() {
  gulp.src(['src/js/modal.js','src/js/cookie-cutter.js', './src/js/tabs.js','./src/js/accordion.js','./src/js/pluginTemplate.js'])
    .pipe(concat('cookie-cutter.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js'))
});


gulp.task('watch', function(){
  gulp.watch('src/scss/**/*.scss', ['sass']);
  gulp.watch('src/js/*.js', ['scripts']);
})
