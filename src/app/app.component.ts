import { Component } from '@angular/core';
import { NgMatThemingService } from 'ng-mat-theming';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-mat-theming';
  constructor(public themeService: NgMatThemingService) {

  }
}
