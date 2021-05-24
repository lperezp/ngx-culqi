import { TestBed } from '@angular/core/testing';

import { NgCulqiService } from './ng-culqi.service';

describe('NgCulqiService', () => {
  let service: NgCulqiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgCulqiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
