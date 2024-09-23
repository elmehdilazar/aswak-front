import { TestBed } from '@angular/core/testing';

import { IntermapService } from './intermap.service';

describe('IntermapService', () => {
  let service: IntermapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IntermapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
