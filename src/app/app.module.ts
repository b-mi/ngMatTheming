import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NgMatThemingModule } from 'ng-mat-theming';
import { NgMatThemingService } from 'ng-mat-theming';

import { DragDropDemoComponent } from './drag-drop-demo/drag-drop-demo.component';
import { DragDropModule } from '@angular/cdk/drag-drop';

const themesSettings =
{
  lightAppColor: '#FAFAFA',
  lightSecondaryColor: '#EAEAEA',
  lightDefaultColor: '#FFFFFF',
  lightPrimaryColor: '#3F51B5',
  lightAccentColor: '#FF4081',
  lightWarnColor: '#F44336',
  lightTextColor: '#272727',

  darkAppColor: '#303030',
  darkSecondaryColor: '#4A4A4A',
  darkDefaultColor: '#424242',
  darkPrimaryColor: '#8BC34A',
  darkAccentColor: '#FFD740',
  darkWarnColor: '#FF5722',
  darkTextColor: '#FFFFFF',
};


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    DragDropDemoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    NgMatThemingModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatSlideToggleModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    DragDropModule
  ],
  providers: [
    // { provide: 'themeParams', useValue: themesSettings }
    NgMatThemingService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  /**
   *
   */
  constructor() { }
}
