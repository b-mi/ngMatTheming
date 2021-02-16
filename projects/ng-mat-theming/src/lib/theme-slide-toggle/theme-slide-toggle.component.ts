import { Component, OnInit, Input } from '@angular/core';
import { NgMatThemingService } from '../ng-mat-theming.service';
@Component({
  selector: 'theme-slide-toggle',
  templateUrl: './theme-slide-toggle.component.html',
  styleUrls: ['./theme-slide-toggle.component.css']
})
export class ThemeSlideToggleComponent implements OnInit {
  constructor(public themeService: NgMatThemingService) {
  }

  ngOnInit(): void {
  }

  change(event) {
    this.themeService.isDark = event.checked ? 1 : 0;
  }

}
