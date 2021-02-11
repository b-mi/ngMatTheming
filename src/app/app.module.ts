import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NgMatThemingModule } from 'ng-mat-theming';
import { NgMatThemingService } from 'ng-mat-theming';
import { DragDropDemoComponent } from './drag-drop-demo/drag-drop-demo.component';
import { DragDropModule } from '@angular/cdk/drag-drop';

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
    MatSlideToggleModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    DragDropModule
  ],
  providers: [NgMatThemingService],
  bootstrap: [AppComponent]
})
export class AppModule {
  /**
   *
   */
  constructor() { }
}
