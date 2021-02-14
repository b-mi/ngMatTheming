# NgMatTheming

# Features
- suport two themes - configurable in styles.scss
- component `theme-slide-toggle` based on Material `mat-slide-toggle` for switching theme
- service for switching themes `NgMatThemingService`
- auto save selected theme (light/dark)
- support for full height body material background color
- update cdk Drag&Drop to change background color for dark theme
- aditional classes
    - primary-foreground
    - primary-background
    - secondary-background

# [Demo](https://b-mi.github.io/ngMatTheming/)
# Usage

- `ng new testApp`
- `cd testApp`
- install [Angular Material](https://material.angular.io/guide/getting-started)
    - `ng add @angular/material`
- `npm i ng-mat-theming`

# Updates of app.module.ts
- add:
```
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NgMatThemingModule } from 'ng-mat-theming';
import { NgMatThemingService } from 'ng-mat-theming';
```
- add `MatToolbarModule, MatSlideToggleModule, NgMatThemingModule` into imports
- add `NgMatThemingService` into providers

# Updates of styles.scss
- replace content of styles.scss by this: [styles.scss](https://github.com/b-mi/ngMatTheming/blob/main/src/styles.scss):

# Update of app.component.ts
- add `import { NgMatThemingService } from 'ng-mat-theming';`
- add constructor `constructor(public themeService: NgMatThemingService) { }`

# Update of app.component.html
Replace content of app.component.html by:
```
<div [ngClass]="{'dark-theme': themeService.isDark}" class="theme-container">
  <mat-toolbar color="primary">
    <theme-slide-toggle></theme-slide-toggle>
  </mat-toolbar>
</div>
```

Replace content of div element by your main component (mat-sidenav or  router-outlet)

-----------------
