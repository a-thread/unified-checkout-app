// src/app/services/payer-authentication.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PayerAuthenticationService {
  constructor() {}

  authenticatePayer(payerId: string, password: string): boolean {
    // Dummy authentication logic
    return payerId === 'validPayerId' && password === 'validPassword';
  }
}
