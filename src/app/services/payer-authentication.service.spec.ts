import { TestBed } from '@angular/core/testing';

import { PayerAuthenticationService } from './payer-authentication.service';

describe('PayerAuthenticationService', () => {
  let service: PayerAuthenticationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PayerAuthenticationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
