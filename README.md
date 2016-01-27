## plugin-builder
Aurelia application designed to assist the process of building Aurelia plugins

### Introduction
This project is inspired by the experience the [Aurelia-UI-Toolkits](https://github.com/aurelia-ui-toolkits) team collected in the process of building the [Aurelia-KendoUI-plugin](https://github.com/aurelia-ui-toolkits/aurelia-kendoui-plugin) component. Once implemented, this application will superseed the current [Skeleton-plugin](https://github.com/aurelia/skeleton-plugin).

### Running this project
1. `npm install` (both in the root directory and in the sample directory)
2. `jspm.cmd install` in the root directory
3. `gulp build` in the root directory
4. in the sample directory run `jspm.cmd link ../devbuild/system plugin-builder`
5. in the sample directory run `jspm.cmd install`
6. `gulp watch`
