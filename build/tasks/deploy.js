var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('deploy', function(callback) {
  // gh-pages
});

gulp.task('clean-old-bundle', function () {
  return gulp.src(['./sample/src/build.js', './sample/build.js'])
    .pipe(vinylPaths(del));
});

gulp.task('move-bundle', function () {
  return gulp.src('./sample/build.js')
    .pipe(gulp.dest('./sample/src/build.js'));
});

gulp.task('prepare-deploy', function () {
  return runSequence(
    'clean-old-bundle',
    'bundle',
    'move-bundle',
    'prepare-deploy',
    callback
  );
});
