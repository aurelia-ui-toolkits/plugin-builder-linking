/* eslint-disable no-var, no-shadow, dot-notation */

var babel = require('babel');

module.exports = function(wallaby) {
  return {
    files: [

      {pattern: 'jspm_packages/system.js', instrument: false},
      {pattern: 'jspm.browser.js', instrument: false},
      {pattern: 'jspm.js', instrument: false},
      {pattern: 'node_modules/phantomjs-polyfill/bind-polyfill.js', load: true},
      {pattern: 'src/**/*.js', load: false}
    ],

    tests: [
      {pattern: 'test/unit/**/*.spec.js', load: false}
    ],

    compilers: {
      '**/*.js': wallaby.compilers.babel({
        babel: babel,
        optional: [
          'es7.decorators',
          'es7.classProperties'
        ]
      })
    },

    middleware: (app, express) => {
      app.use('/jspm_packages', express.static(require('path').join(__dirname, 'jspm_packages')));
    },

    bootstrap: function(wallaby) {
      var promises = [];
      var i = 0;
      var len = wallaby.tests.length;

      wallaby.delayStart();

      for (; i < len; i++) {
        promises.push(System['import'](wallaby.tests[i]));
      }

      System['import']('core-js')
      .then(function() {
        return System['import']('polymer/mutationobservers');
      })
      .then(function() {
        Promise.all(promises).then(function() {
          wallaby.start();
        });
      });
    },

    debug: false
  };
};
