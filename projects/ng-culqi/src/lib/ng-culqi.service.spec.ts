import { TestBed } from '@angular/core/testing';

import { NgCulqiService } from './ng-culqi.service';

describe('NgCulqiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgCulqiService = TestBed.get(NgCulqiService);
    expect(service).toBeTruthy();
  });
});
