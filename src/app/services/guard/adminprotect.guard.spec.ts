import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { adminprotectGuard } from './adminprotect.guard';

describe('adminprotectGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => adminprotectGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
