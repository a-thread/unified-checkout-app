import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaymentsService {
  constructor() {}

  processPayment(paymentDetails: string): string {
    // Dummy payment processing logic
    return `Payment processed for details: ${paymentDetails}`;
  }
}
