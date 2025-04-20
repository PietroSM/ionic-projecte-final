import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { comandesResolver } from './comandes.resolver';

describe('comandesResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => comandesResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
