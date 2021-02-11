import { TestBed } from '@angular/core/testing';

import { NgMatThemingService } from './ng-mat-theming.service';

describe('NgMatThemingService', () => {
  let service: NgMatThemingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgMatThemingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
