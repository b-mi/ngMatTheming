import { Component, OnInit, Input } from '@angular/core';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-theme-toggle',
  templateUrl: './theme-toggle.component.html',
  styleUrls: ['./theme-toggle.component.css']
})
export class ThemeToggleComponent implements OnInit {



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

  constructor(public themeService: ThemeService) { }

  ngOnInit(): void {
  }

  change(event) {
    this.themeService.isDark = event.checked ? 1 : 0;
  }

}
