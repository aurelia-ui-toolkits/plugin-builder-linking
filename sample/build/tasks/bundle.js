// var gulp = require('gulp');
// var bundler = require('aurelia-bundler');
// var bundles = require('../bundles.js');
//
// var config = {
//   force: true,
//   baseURL: './sample',
//   packagePath: '.',
//   bundles: bundles.bundles
// };
//
// gulp.task('bundle', function() {
//   return bundler.bundle(config);
// });
//
// gulp.task('unbundle', function() {
//   return bundler.unbundle(config);
// });


var gulp = require('gulp');
var runSequence = require('run-sequence');
var del = require('del');
var vinylPaths = require('vinyl-paths');
var exec = require('child_process').exec;

gulp.task('bundle', ['unbundle'], function(cb) {


  runSequence(
    'jspm-bundle',
    'move-bundle',
    cb
  )
});

var modules = [
  '[src/*.js]',
  'plugin-builder',
  'aurelia-binding',
  'aurelia-bootstrapper',
  'aurelia-framework',
  'aurelia-loader',
  // 'aurelia-loader-default',
  'aurelia-templating'
];

gulp.task('jspm-bundle', function(cb) {
  process.chdir('./sample');
  exec('jspm bundle ' + modules.join(' + ') + ' --inject --minify', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);

    process.chdir('../');
    cb();
  });
});


gulp.task('move-bundle', function() {
  return gulp.src(['./sample/build.js', './sample/build.js.map'])
          .pipe(vinylPaths(del))
          .pipe(gulp.dest('./sample/src/'));
});


gulp.task('unbundle', ['clean-bundle'], function(cb) {
  process.chdir('./sample');
  exec('jspm unbundle', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);

    process.chdir('../');
    cb(err);
  });
});
