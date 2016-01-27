SystemJS.config({
          "packageConfigPaths": [
                    "npm:@*/*.json",
                    "npm:*.json",
                    "github:*/*.json",
                    "local:*.json"
          ],
          "globalEvaluationScope": false,
          "transpiler": "babel",
          "babelOptions": {
                    "optional": [
                              "runtime",
                              "optimisation.modules.system",
                              "es7.decorators",
                              "es7.classProperties"
                    ]
          },
          "map": {
                    "assert": "github:jspm/nodelibs-assert@0.2.0-alpha",
                    "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.1.0.3",
                    "aurelia-bootstrapper": "npm:aurelia-bootstrapper@1.0.0-beta.1",
                    "aurelia-framework": "npm:aurelia-framework@1.0.0-beta.1.0.6",
                    "aurelia-http-client": "npm:aurelia-http-client@1.0.0-beta.1",
                    "aurelia-loader": "npm:aurelia-loader@1.0.0-beta.1",
                    "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.0.2",
                    "babel": "npm:babel-core@5.8.33",
                    "babel-runtime": "npm:babel-runtime@5.8.34",
                    "buffer": "github:jspm/nodelibs-buffer@0.2.0-alpha",
                    "child_process": "github:jspm/nodelibs-child_process@0.2.0-alpha",
                    "clean-css": "npm:clean-css@3.4.8",
                    "core-js": "npm:core-js@1.2.6",
                    "css": "github:systemjs/plugin-css@0.1.20",
                    "events": "github:jspm/nodelibs-events@0.2.0-alpha",
                    "font-awesome": "npm:font-awesome@4.5.0",
                    "fs": "github:jspm/nodelibs-fs@0.2.0-alpha",
                    "http": "github:jspm/nodelibs-http@0.2.0-alpha",
                    "json": "github:systemjs/plugin-json@0.1.0",
                    "module": "github:jspm/nodelibs-module@0.2.0-alpha",
                    "net": "github:jspm/nodelibs-net@0.2.0-alpha",
                    "path": "github:jspm/nodelibs-path@0.2.0-alpha",
                    "plugin-builder": "local:plugin-builder@master",
                    "process": "github:jspm/nodelibs-process@0.2.0-alpha",
                    "stream": "github:jspm/nodelibs-stream@0.2.0-alpha",
                    "text": "github:systemjs/plugin-text@0.0.4",
                    "tty": "github:jspm/nodelibs-tty@0.2.0-alpha",
                    "url": "github:jspm/nodelibs-url@0.2.0-alpha",
                    "util": "github:jspm/nodelibs-util@0.2.0-alpha"
          },
          "packages": {
                    "github:jspm/nodelibs-buffer@0.2.0-alpha": {
                              "map": {
                                        "buffer-browserify": "npm:buffer@4.3.0"
                              }
                    },
                    "github:jspm/nodelibs-http@0.2.0-alpha": {
                              "map": {
                                        "http-browserify": "npm:stream-http@2.1.0"
                              }
                    },
                    "github:jspm/nodelibs-stream@0.2.0-alpha": {
                              "map": {
                                        "stream-browserify": "npm:stream-browserify@2.0.1"
                              }
                    },
                    "github:jspm/nodelibs-url@0.2.0-alpha": {
                              "map": {
                                        "url-browserify": "npm:url@0.11.0"
                              }
                    },
                    "npm:aurelia-binding@1.0.0-beta.1.0.3": {
                              "map": {
                                        "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1",
                                        "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.0.1",
                                        "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-beta.1.0.1",
                                        "core-js": "npm:core-js@1.2.6"
                              }
                    },
                    "npm:aurelia-bootstrapper@1.0.0-beta.1": {
                              "map": {
                                        "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.0-beta.1",
                                        "aurelia-framework": "npm:aurelia-framework@1.0.0-beta.1.0.6",
                                        "aurelia-history": "npm:aurelia-history@1.0.0-beta.1",
                                        "aurelia-history-browser": "npm:aurelia-history-browser@1.0.0-beta.1.0.1",
                                        "aurelia-loader-default": "npm:aurelia-loader-default@1.0.0-beta.1.0.1",
                                        "aurelia-logging-console": "npm:aurelia-logging-console@1.0.0-beta.1",
                                        "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.0.1",
                                        "aurelia-pal-browser": "npm:aurelia-pal-browser@1.0.0-beta.1.0.1",
                                        "aurelia-router": "npm:aurelia-router@1.0.0-beta.1",
                                        "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.0.2",
                                        "aurelia-templating-binding": "npm:aurelia-templating-binding@1.0.0-beta.1.0.2",
                                        "aurelia-templating-resources": "npm:aurelia-templating-resources@1.0.0-beta.1.0.3",
                                        "aurelia-templating-router": "npm:aurelia-templating-router@1.0.0-beta.1.0.4",
                                        "core-js": "npm:core-js@1.2.6"
                              }
                    },
                    "npm:aurelia-dependency-injection@1.0.0-beta.1": {
                              "map": {
                                        "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1",
                                        "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1",
                                        "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.0.1",
                                        "core-js": "npm:core-js@1.2.6"
                              }
                    },
                    "npm:aurelia-event-aggregator@1.0.0-beta.1": {
                              "map": {
                                        "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1"
                              }
                    },
                    "npm:aurelia-framework@1.0.0-beta.1.0.6": {
                              "map": {
                                        "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.1.0.3",
                                        "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1",
                                        "aurelia-loader": "npm:aurelia-loader@1.0.0-beta.1",
                                        "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1",
                                        "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1",
                                        "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.0.1",
                                        "aurelia-path": "npm:aurelia-path@1.0.0-beta.1",
                                        "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-beta.1.0.1",
                                        "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.0.2",
                                        "core-js": "npm:core-js@1.2.6"
                              }
                    },
                    "npm:aurelia-history-browser@1.0.0-beta.1.0.1": {
                              "map": {
                                        "aurelia-history": "npm:aurelia-history@1.0.0-beta.1",
                                        "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.0.1",
                                        "core-js": "npm:core-js@1.2.6"
                              }
                    },
                    "npm:aurelia-http-client@1.0.0-beta.1": {
                              "map": {
                                        "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.0.1",
                                        "aurelia-path": "npm:aurelia-path@1.0.0-beta.1",
                                        "core-js": "npm:core-js@1.2.6"
                              }
                    },
                    "npm:aurelia-loader-default@1.0.0-beta.1.0.1": {
                              "map": {
                                        "aurelia-loader": "npm:aurelia-loader@1.0.0-beta.1",
                                        "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1",
                                        "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.0.1"
                              }
                    },
                    "npm:aurelia-loader@1.0.0-beta.1": {
                              "map": {
                                        "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1",
                                        "aurelia-path": "npm:aurelia-path@1.0.0-beta.1"
                              }
                    },
                    "npm:aurelia-logging-console@1.0.0-beta.1": {
                              "map": {
                                        "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1",
                                        "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.0.1"
                              }
                    },
                    "npm:aurelia-metadata@1.0.0-beta.1": {
                              "map": {
                                        "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.0.1",
                                        "core-js": "npm:core-js@1.2.6"
                              }
                    },
                    "npm:aurelia-pal-browser@1.0.0-beta.1.0.1": {
                              "map": {
                                        "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.0.1"
                              }
                    },
                    "npm:aurelia-route-recognizer@1.0.0-beta.1": {
                              "map": {
                                        "aurelia-path": "npm:aurelia-path@1.0.0-beta.1",
                                        "core-js": "npm:core-js@1.2.6"
                              }
                    },
                    "npm:aurelia-router@1.0.0-beta.1": {
                              "map": {
                                        "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1",
                                        "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.0-beta.1",
                                        "aurelia-history": "npm:aurelia-history@1.0.0-beta.1",
                                        "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1",
                                        "aurelia-path": "npm:aurelia-path@1.0.0-beta.1",
                                        "aurelia-route-recognizer": "npm:aurelia-route-recognizer@1.0.0-beta.1",
                                        "core-js": "npm:core-js@1.2.6"
                              }
                    },
                    "npm:aurelia-task-queue@1.0.0-beta.1.0.1": {
                              "map": {
                                        "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.0.1"
                              }
                    },
                    "npm:aurelia-templating-binding@1.0.0-beta.1.0.2": {
                              "map": {
                                        "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.1.0.3",
                                        "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1",
                                        "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.0.2"
                              }
                    },
                    "npm:aurelia-templating-resources@1.0.0-beta.1.0.3": {
                              "map": {
                                        "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.1.0.3",
                                        "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1",
                                        "aurelia-loader": "npm:aurelia-loader@1.0.0-beta.1",
                                        "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1",
                                        "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.0.1",
                                        "aurelia-path": "npm:aurelia-path@1.0.0-beta.1",
                                        "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-beta.1.0.1",
                                        "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.0.2",
                                        "core-js": "npm:core-js@1.2.6"
                              }
                    },
                    "npm:aurelia-templating-router@1.0.0-beta.1.0.4": {
                              "map": {
                                        "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1",
                                        "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1",
                                        "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1",
                                        "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.0.1",
                                        "aurelia-path": "npm:aurelia-path@1.0.0-beta.1",
                                        "aurelia-router": "npm:aurelia-router@1.0.0-beta.1",
                                        "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.0.2"
                              }
                    },
                    "npm:aurelia-templating@1.0.0-beta.1.0.2": {
                              "map": {
                                        "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.1.0.3",
                                        "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1",
                                        "aurelia-loader": "npm:aurelia-loader@1.0.0-beta.1",
                                        "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1",
                                        "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1",
                                        "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.0.1",
                                        "aurelia-path": "npm:aurelia-path@1.0.0-beta.1",
                                        "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-beta.1.0.1",
                                        "core-js": "npm:core-js@1.2.6"
                              }
                    },
                    "npm:babel-runtime@5.8.34": {
                              "map": {}
                    },
                    "npm:buffer@4.3.0": {
                              "map": {
                                        "base64-js": "npm:base64-js@1.0.2",
                                        ieee754: "npm:ieee754@1.1.6",
                                        isarray: "npm:isarray@1.0.0"
                              }
                    },
                    "npm:core-js@1.2.6": {
                              "map": {
                                        "systemjs-json": "github:systemjs/plugin-json@0.1.0"
                              }
                    },
                    "npm:font-awesome@4.5.0": {
                              "map": {
                                        css: "github:systemjs/plugin-css@0.1.20"
                              }
                    },
                    "npm:readable-stream@2.0.5": {
                              "map": {
                                        "core-util-is": "npm:core-util-is@1.0.2",
                                        inherits: "npm:inherits@2.0.1",
                                        isarray: "npm:isarray@0.0.1",
                                        "process-nextick-args": "npm:process-nextick-args@1.0.6",
                                        string_decoder: "npm:string_decoder@0.10.31",
                                        "util-deprecate": "npm:util-deprecate@1.0.2"
                              }
                    },
                    "npm:stream-browserify@2.0.1": {
                              "map": {
                                        inherits: "npm:inherits@2.0.1",
                                        "readable-stream": "npm:readable-stream@2.0.5"
                              }
                    },
                    "npm:stream-http@2.1.0": {
                              "map": {
                                        "builtin-status-codes": "npm:builtin-status-codes@1.0.0",
                                        inherits: "npm:inherits@2.0.1",
                                        "to-arraybuffer": "npm:to-arraybuffer@1.0.1",
                                        xtend: "npm:xtend@4.0.1"
                              }
                    },
                    "npm:url@0.11.0": {
                              "map": {
                                        punycode: "npm:punycode@1.3.2",
                                        querystring: "npm:querystring@0.2.0"
                              }
                    }
          }
});
