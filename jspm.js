SystemJS.config({
      packageConfigPaths: [
            "npm:@*/*.json",
            "npm:*.json",
            "github:*/*.json"
      ],
      globalEvaluationScope: false,
      transpiler: "babel",
      babelOptions: {
            "optional": [
                  "runtime",
                  "optimisation.modules.system",
                  "es7.decorators",
                  "es7.classProperties"
            ]
      },

      map: {
            "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.1.0.3",
            "aurelia-bootstrapper": "npm:aurelia-bootstrapper@1.0.0-beta.1",
            "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1",
            "aurelia-framework": "npm:aurelia-framework@1.0.0-beta.1.0.6",
            "aurelia-http-client": "npm:aurelia-http-client@1.0.0-beta.1",
            "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1",
            "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1",
            "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.0.1",
            "aurelia-pal-browser": "npm:aurelia-pal-browser@1.0.0-beta.1.0.1",
            "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.0.2",
            "babel": "npm:babel-core@5.8.34",
            "babel-runtime": "npm:babel-runtime@5.8.34",
            "core-js": "npm:core-js@1.2.6",
            "fs": "github:jspm/nodelibs-fs@0.2.0-alpha",
            "path": "github:jspm/nodelibs-path@0.2.0-alpha",
            "polymer/mutationobservers": "github:polymer/mutationobservers@0.4.2",
            "process": "github:jspm/nodelibs-process@0.2.0-alpha",
            "text": "github:systemjs/plugin-text@0.0.4"
      },

      packages: {
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
            "npm:core-js@1.2.6": {
                  "map": {
                        "systemjs-json": "github:systemjs/plugin-json@0.1.0"
                  }
            }
      }
});
