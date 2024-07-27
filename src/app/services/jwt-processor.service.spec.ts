import { TestBed } from '@angular/core/testing';

import { JwtProcessorService } from './jwt-processor.service';

describe('JwtProcessorService', () => {
  let service: JwtProcessorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JwtProcessorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
