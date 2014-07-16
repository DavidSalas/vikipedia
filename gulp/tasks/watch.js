/**
 * Created by david on 7/7/14.
 */

var gulp = require('gulp');

gulp.task('watch', ['setWatch', 'browserSync'], function() {
  gulp.watch('src/html/**', ['copyHtml']);
  gulp.watch('src/css/**', ['copyCss']);
  gulp.watch(['test/spec/**', 'src/js/**'], ['test']);
  // Note: The browserify task handles js recompiling with watchify
});