import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgMatThemingComponent } from './ng-mat-theming.component';

describe('NgMatThemingComponent', () => {
  let component: NgMatThemingComponent;
  let fixture: ComponentFixture<NgMatThemingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgMatThemingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgMatThemingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
