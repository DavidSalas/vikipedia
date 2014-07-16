/**
 * Created by david on 7/5/14.
 */

var gulp = require('gulp');

gulp.task('copyHtml', function() {
  return gulp.src('src/html/**')
    .pipe(gulp.dest('build'));
});
