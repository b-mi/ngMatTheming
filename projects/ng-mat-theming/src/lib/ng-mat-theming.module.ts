import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NgMatThemingComponent } from './ng-mat-theming.component';
import { ThemeSlideToggleComponent } from './theme-slide-toggle/theme-slide-toggle.component';



@NgModule({
  declarations: [NgMatThemingComponent, ThemeSlideToggleComponent],
  imports: [
    MatButtonModule,
    MatSlideToggleModule
  ],
  exports: [NgMatThemingComponent, ThemeSlideToggleComponent]
})
export class NgMatThemingModule { }
