import { Injectable, Provider } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NgMatThemingService {
  storeKey: string;

  private _isDark: number;
  public get isDark(): number {
    return this._isDark;
  }
  public set isDark(v: number) {
    this._isDark = v;
    this.tryStore();
  }


  Init(arg0: string) {
    this.storeKey = arg0;
    if (this.storeKey) {
      const key = localStorage.getItem(this.storeKey);
      if (key) {
        const n = Number.parseInt(key);
        if (n)
          this.isDark = 1;
      }
    }
  }

  setDark() {
    this.isDark = 1;
  }
  setLight() {
    this.isDark = 0;
  }
  toggle() {
    if (this.isDark)
      this.isDark = 0;
    else
      this.isDark = 1;

  }
  tryStore() {
    if (this.storeKey) {
      localStorage.setItem(this.storeKey, this.isDark.toString());
    }
  }
  constructor() { 
    this.Init('ng-mat-theming-store-key');
  }
}
