var gulp = require('gulp');
var paths = require('../../../build/paths');
var del = require('del');
var vinylPaths = require('vinyl-paths');

gulp.task('clean-bundle', function() {
  return gulp.src(['sample/src/build.js', 'sample/src/build.js.map'])
    .pipe(vinylPaths(del));
});
