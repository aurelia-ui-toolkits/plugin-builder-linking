var gulp = require('gulp');
var browserSync = require('browser-sync');
var paths = require('../../../build/paths');

gulp.task('watch-sample', ['watch'], function() {
  var bs = browserSync.get('Sample server');

  gulp.watch(paths.sampleStyle, bs.reload).on('change', reportChange);
  gulp.watch(paths.sampleSrc, bs.reload).on('change', reportChange);
  gulp.watch(paths.sampleHtml, bs.reload).on('change', reportChange);
});
