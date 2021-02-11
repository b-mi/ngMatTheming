# NgMatThemingLib

# Features
- suport two themes - configurable in styles.scss
- component `theme-slide-toggle` based on Material `mat-slide-toggle` for switching theme
- service for switching themes `NgMatThemingService`
- auto save selected theme (light/dark)
- support for full height body material background color
- aditional classes
    - primary-foreground
    - primary-background
    - secondary-background
# Usage

- ng new testApp
- cd testApp
- install [Angular Material](https://material.angular.io/guide/getting-started)
- npm i ngMatTheming

# Updates of app.module.ts
- add `import { NgMatThemingModule } from 'ng-mat-theming';`
- add `NgMatThemingModule` into imports
- add `import { NgMatThemingService } from 'ng-mat-theming';`
- add `NgMatThemingService` into providers

# Updates of styles.scss
- add [Angular Material multiple themes](https://material.angular.io/guide/theming#example-of-defining-multiple-themes)
- rename class `.unicorn-dark-theme` to `.dark-theme`
- add additional classes:

```
:root {
    --primary-background: #ffffff;
    --secondary-background: #fafafa;
    --primary-foreground: #272727;
}

.primary-foreground {
    color: var(--primary-foreground);
}

.primary-background {
    background-color: var(--primary-background);
}

.secondary-background {
    background-color: var(--secondary-background);
}

body {
    margin: 0;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: auto;
}

.theme-container {
    height: 100vh;
    background-color: var(--secondary-background);
}
```

# Update of app.component.html
```
<div [ngClass]="{'dark-theme': themeService.isDark}" class="theme-container">
    <app-nav></app-nav>
</div>
```

Replace element `<app-nav></app-nav>` with your main component

------------------


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

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
