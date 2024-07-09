import { TestBed } from '@angular/core/testing';

import { NgxCulqiService } from './ngx-culqi.service';

describe('NgxCulqiService', () => {
  let service: NgxCulqiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxCulqiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
