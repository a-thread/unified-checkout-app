import { TestBed } from '@angular/core/testing';

import { PaymentCredentialsService } from './payment-credentials.service';

describe('PaymentCredentialsService', () => {
  let service: PaymentCredentialsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaymentCredentialsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
