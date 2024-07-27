import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaymentCredentialsService {
  constructor() {}

  validatePaymentCredentials(cardNumber: string, cvv: string): boolean {
    // Dummy validation logic
    return cardNumber === 'validCardNumber' && cvv === 'validCVV';
  }
}
