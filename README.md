## plugin-builder
Aurelia application designed to assist the process of building Aurelia plugins

### Introduction
This project is inspired by the experience the [Aurelia-UI-Toolkits](https://github.com/aurelia-ui-toolkits) team collected in the process of building the [Aurelia-KendoUI-plugin](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-plugin) component. Once implemented, this application will superseed the current [Skeleton-plugin](https://github.com/aurelia/skeleton-plugin).

### Running this project
NOTE: JSPM 0.17 renamed the `config.js` file to `jspm.js` and `jspm.browser.js`. If you try to run a `jspm` command (such as `jspm install`) it will try and open the `jspm.js` file instead. A workaround for this problem is to run `jspm.cmd install`.

1. `npm install` (both in the root directory and in the sample directory)
2. `jspm.cmd install` in the root directory
3. in the sample directory run `jspm.cmd link ../dist/system plugin-builder`
4. in the sample directory run `jspm.cmd install`
5. `gulp watch`
