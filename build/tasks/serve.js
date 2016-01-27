var gulp = require('gulp');
var browserSync = require('browser-sync');
var path = require('path');
var paths = require('../paths');

// this task utilizes the browsersync plugin
// to create a dev server instance
// at http://localhost:9000
gulp.task('serve', ['build'], function(done) {
  var bs = browserSync.create('Sample server');

  var options = {
    server: {
      baseDir: paths.sample,
      routes: {}
    },
  };

  // Rewrite the sample/src/<plugin-name> folder to dist/system folder
  // options.server.routes['/src/' + paths.packageName] = path.join(paths.output, 'system');

  bs.init(options, done);
});
