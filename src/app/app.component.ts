import { Component } from '@angular/core';
import { NgMatThemingService } from 'ng-mat-theming';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngMatThemingLib';
  constructor(public themeService: NgMatThemingService) {

  }
}
