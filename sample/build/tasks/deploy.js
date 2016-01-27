var gulp = require('gulp');
var ghPages = require('gulp-gh-pages');
var runSequence = require('run-sequence');
var del = require('del');
var vinylPaths = require('vinyl-paths');

gulp.task('deploy-gh-pages', function() {
  return gulp.src([
    './sample/src/**/*',
    './sample/styles/*.*',
    './sample/jspm_packages/*.js', // include system.js
    './sample/jspm_packages/npm/font-awesome@*/**/*',
    './sample/jspm_packages/npm/font-awesome*.js',
    './sample/index.html',
    './sample/jspm.browser.js',
    './sample/jspm.config.js',
  ], { base: './sample/' })
    .pipe(gulp.dest('./artefacts')) // for debugging
    // .pipe(ghPages());
});

gulp.task('deploy', function() {
  return runSequence(
    'bundle',
    'deploy-gh-pages',
    'unbundle'
  );
});
