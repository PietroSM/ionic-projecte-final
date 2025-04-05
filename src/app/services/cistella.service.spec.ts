import { TestBed } from '@angular/core/testing';

import { CistellaService } from './cistella.service';

describe('CistellaService', () => {
  let service: CistellaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CistellaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
