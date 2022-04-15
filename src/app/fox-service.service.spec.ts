import { TestBed } from '@angular/core/testing';

import { FoxServiceService } from './fox-service.service';

describe('FoxServiceService', () => {
  let service: FoxServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FoxServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
