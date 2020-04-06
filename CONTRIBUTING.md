# Contributing to Brick-a-Pic

Welcome to the Brick-a-Pic project! Thank you for considering contributing. If you have any questions, please join our [Gitter](https://gitter.im/brick-a-pic-talk/community) or [open an issue](https://github.com/brick-a-pic/brick-a-pic/issues/new).

## Ways to Contribute

* [Opening Issues](#opening-issues)
* [Contributing Code](#contributing-code)


## Opening Issues

We use GitHub Issues for both reporting bugs and requesting features, so new issues are always welcome. Please use [this form](https://github.com/brick-a-pic/brick-a-pic/issues/new) to file an issue. Some things to keep in mind when submitting a new issue:

* Assign issue labels such as `enhancement`, `bug`, or `question` as needed when creating your issue so it's easily identified in the issue overview.
* Be as descriptive as possible when describing a bug, or a new feature/enhancement. Screenshots can be very helpful.

## Contributing Code

### Code Overview

The code is organized into Vue components, each of which serves a distinct purpose and communicates with other components by passing props down and emitting events up. We use [Vuetify.js components](https://vuetifyjs.com/en/components/api-explorer/) for UI components, so check Vuetify's extensive list of pre-made components to see if you need any for your task.

#### Component hierarchy

* [App.vue](./src/App.vue)
  * [Preview.vue](./src/components/Preview.vue)
  * [Settings.vue](./src/components/Settings.vue)
    * [OpenImage.vue](./src/components/OpenImage.vue)
    * [ImageProcessor.vue](./src/components/ImageProcessor.vue)
    * [ColorPicker.vue](./src/components/ColorPicker.vue)

### Pull Requests

To contritube code, please [fork](https://github.com/brick-a-pic/brick-a-pic/fork) this repository, add your changes, and submit a pull request detailing what changes you make and the features it contributes / the fixes it makes. The CI system (Travis) will run a build and test your code, then we will inspect your changes and review your code.

### Code Style

Our continuous integration system uses [ESLint](https://eslint.org/) to enforce consistent coding style. If there are linting errors, the build will fail, so please double-check that your build of our app succeeds before submittinmg a pull request. Running `npm run build` or `npm run serve` will attempt a build of the app to see if your build succeeds, and plugins such as [ESLint for VSCode](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) can show you linter errors to make linter debugging easier.

### Unit Tests

If you are contributing a new feature, please write a unit test (or multiple) to make it easy for others to confirm its functionality in the future. Unit tests are stored in the [tests/unit](tests/unit) directory, and follow the naming format of `<test_name>.spec.js`. You can run the unit test suite by running `npm run test:unit` in your copy of this repository. Please refer to the existing unit tests for guidance, and ask if you have any questions. 
