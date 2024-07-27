import { TestBed } from '@angular/core/testing';

import { CaptureContextService } from './capture-context.service';

describe('CaptureContextService', () => {
  let service: CaptureContextService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CaptureContextService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
