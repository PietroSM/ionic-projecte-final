import { TestBed } from '@angular/core/testing';

import { ProducteService } from './producte.service';

describe('ProducteService', () => {
  let service: ProducteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProducteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
