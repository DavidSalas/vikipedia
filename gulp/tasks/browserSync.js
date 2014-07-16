/**
 * Created by david on 7/7/14.
 */

var browserSync = require('browser-sync');
var gulp        = require('gulp');

gulp.task('browserSync', ['build'], function() {
  browserSync.init(['build/**'], {
    server: {
      baseDir: 'build'
    }
  });
});