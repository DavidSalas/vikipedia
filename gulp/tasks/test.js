/**
 * Created by david on 7/6/14.
 */

var gulp = require('gulp');
var browserify = require('browserify');
var source       = require('vinyl-source-stream');

gulp.task('test', function() {
  return browserify('./test/spec/specEntry')
    .bundle()
    //Pass desired output filename to vinyl-source-stream
    .pipe(source('specBundle.js'))
    // Start piping stream to tasks!
    .pipe(gulp.dest('test/'));
});