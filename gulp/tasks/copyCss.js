/**
 * Created by david on 7/7/14.
 */

var gulp = require('gulp');

gulp.task('copyCss', function() {
  return gulp.src('src/css/**')
    .pipe(gulp.dest('build/css'));
});
