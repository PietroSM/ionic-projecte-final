import { TestBed } from '@angular/core/testing';

import { XatService } from './xat.service';

describe('XatService', () => {
  let service: XatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(XatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
