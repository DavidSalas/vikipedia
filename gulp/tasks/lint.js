/**
 * Created by david on 7/5/14.
 */

var gulp = require('gulp');
var jshint = require('gulp-jshint');

// Lint Task
gulp.task('lint', function() {
  return gulp.src('js/app/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});
