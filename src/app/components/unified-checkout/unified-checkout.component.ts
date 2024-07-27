import { Component, OnInit } from '@angular/core';
import { JwtProcessorService } from '../../services/jwt-processor.service';
import { PayerAuthenticationService } from '../../services/payer-authentication.service';
import { PaymentCredentialsService } from '../../services/payment-credentials.service';
import { PaymentsService } from '../../services/payments.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { CommonModule } from '@angular/common';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-unified-checkout',
  templateUrl: './unified-checkout.component.html',
  styleUrl: './unified-checkout.component.scss',
  standalone: true,
  imports: [CommonModule],
  providers: [
    JwtProcessorService,
    PayerAuthenticationService,
    PaymentCredentialsService,
    PaymentsService,
    HttpClientModule,
    JwtHelperService,
  ]
})
export class UnifiedCheckoutComponent implements OnInit {
  token: string = '';
  claims: any;
  authStatus: boolean = false;
  paymentStatus: boolean = false;
  paymentResult: string = '';
  unifiedCheckoutContent: string = '';

  constructor(
    private jwtProcessorService: JwtProcessorService,
    private payerAuthService: PayerAuthenticationService,
    private paymentCredentialsService: PaymentCredentialsService,
    private paymentsService: PaymentsService,
    private http: HttpClient,
  ) {}

  ngOnInit(): void {
    this.generateToken();
    this.validateToken();
    this.authenticatePayer();
    this.validatePaymentCredentials();
    this.processPayment();
    this.getUnifiedCheckout();
  }

  generateToken(): void {
    this.token = this.jwtProcessorService.generateToken('exampleSubject');
    console.log('Generated Token:', this.token);
  }

  validateToken(): void {
    this.claims = this.jwtProcessorService.validateToken(this.token);
    console.log('Token Claims:', this.claims);
  }

  authenticatePayer(): void {
    this.authStatus = this.payerAuthService.authenticatePayer('validPayerId', 'validPassword');
    console.log('Authentication Status:', this.authStatus);
  }

  validatePaymentCredentials(): void {
    this.paymentStatus = this.paymentCredentialsService.validatePaymentCredentials('validCardNumber', 'validCVV');
    console.log('Payment Credentials Status:', this.paymentStatus);
  }

  processPayment(): void {
    this.paymentResult = this.paymentsService.processPayment('samplePaymentDetails');
    console.log('Payment Result:', this.paymentResult);
  }

  getUnifiedCheckout(): void {
    this.http.get(`${environment.apiUrl}/unified-checkout`, { responseType: 'text' }).subscribe({
      next: (response: string) => {
        this.unifiedCheckoutContent = response;
      },
      error: (error: any) => {
        console.error('Error fetching Unified Checkout content:', error);
      }
    });
  }
}