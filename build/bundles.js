var filesBundle = [
  "[*.js]"
];

var aureliaBundle = [
  "aurelia-framework",
  "aurelia-bootstrapper",
  "aurelia-router",
  "aurelia-templating-binding",
  "aurelia-templating-resources",
  "aurelia-templating-router",
  "aurelia-loader-default",
  "aurelia-history-browser",
  "aurelia-logging-console"
];

var pluginsBundle = [
  "css",
  "text",
  "core-js",
  "json",
  "core-js/library/**/*",
  "babel"
];

module.exports = {
  "bundles": {
    "aurelia-bundle": {
      "includes": [aureliaBundle, pluginsBundle],
      "options": {
        "inject": true,
        "minify": true,
        "rev": true
      }
    },
    "app-bundle": {
      "includes": filesBundle,
      "options": {
        "inject": true,
        "minify": true,
        "rev": true
      }
    }
  }
}
