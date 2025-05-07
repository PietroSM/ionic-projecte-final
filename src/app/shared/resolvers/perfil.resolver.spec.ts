import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { perfilResolver } from './perfil.resolver';

describe('perfilResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => perfilResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
