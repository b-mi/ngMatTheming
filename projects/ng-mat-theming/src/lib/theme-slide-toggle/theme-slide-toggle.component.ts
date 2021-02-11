import { Component, OnInit, Input } from '@angular/core';
import { NgMatThemingService } from '../ng-mat-theming.service';
@Component({
  selector: 'theme-slide-toggle',
  templateUrl: './theme-slide-toggle.component.html',
  styleUrls: ['./theme-slide-toggle.component.css']
})
export class ThemeSlideToggleComponent implements OnInit {

  private _title: string = "Dark theme";
  public get title(): string {
    return this._title;
  }
  @Input()
  public set title(v: string) {
    this._title = v;
  }


  private _setDarkTheme: number;
  public get setDarkTheme(): number {
    return this._setDarkTheme;
  }
  @Input()
  public set setDarkTheme(v: number) {
    this.themeService.isDark = v;
  }

  constructor(public themeService: NgMatThemingService) {
  }

  ngOnInit(): void {
  }

  change(event) {
    this.themeService.isDark = event.checked ? 1 : 0;
  }

}
