

# StatsManager
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.2.
It allows a user to sign in and sign up, create a new team and/or view a list of teams in your account. Click on a team in the team list will nagivate to the selected team details screen which has all the players in that team.

# Getting Started
## Back-end server for this application
https://github.com/Developer-JL/stats-manager-server

## Dependencies
What you need to run this app:
* `node` and `npm`
* Ensure you're running the latest versions Node and NPM

## Installing
* `clone` this repo
* `npm install` to install all dependencies

## Running the app
After you have installed all dependencies you can now run the app. Run `npm start` to start the app. The port will be displayed to you as `http://localhost:4200`. The app will automatically reload if you change any of the source files.

# TypeScript
> To take full advantage of TypeScript with autocomplete you would have to install it globally and use an editor with the correct TypeScript plugins.

## Use latest TypeScript compiler
Make sure to upgrade, even if you installed TypeScript previously.

```
npm install --global typescript
```

## Use a TypeScript-aware editor

* [Visual Studio Code](https://code.visualstudio.com/) (recommended)
* [Webstorm 10](https://www.jetbrains.com/webstorm/download/)
* [Atom](https://atom.io/) with [TypeScript plugin](https://atom.io/packages/atom-typescript)
* [Sublime Text](http://www.sublimetext.com/3) with [Typescript-Sublime-Plugin](https://github.com/Microsoft/Typescript-Sublime-plugin#installation)

## Code Style for this project
* Following single responsibility principle.
* Avoid long function, write short, more focus and reusable function.
* Meaningful variable name, function name and class name.
* Keep consistency for all the code in project.
* Every nontrivial public method must contain a comment with at least one sentence describing what the method does.
* Follow the pattern for all file names: feature.type.fileType.
* Use camel case for all the ts files.
* Use dashes to separate words for all scss and html files.
* All selectors should start with aip-xxx-xxx
* Don’t use var to define variable
* Every function must have a return type
* Every variable must have a type
* Don’t repeat code
* Follow solid principles
* Don’t put strings directly in html files

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).