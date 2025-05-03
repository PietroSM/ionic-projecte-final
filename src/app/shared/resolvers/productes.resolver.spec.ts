import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { productesResolver } from './productes.resolver';

describe('productesResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => productesResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
