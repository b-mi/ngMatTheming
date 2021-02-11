import { Component, OnInit, ViewEncapsulation } from '@angular/core';
@Component({
  selector: 'ng-mat-theming',
  template: `<ng-content></ng-content>`,
  styleUrls: [
  ],
  encapsulation: ViewEncapsulation.None
})
export class NgMatThemingComponent implements OnInit {

  ngOnInit(): void {
  }

}
