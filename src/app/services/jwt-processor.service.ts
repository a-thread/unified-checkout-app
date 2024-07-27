import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class JwtProcessorService {
  private secretKey = 'secret';

  constructor(private jwtHelper: JwtHelperService) {}

  generateToken(subject: string): string {
    const header = {
      alg: 'HS256',
      typ: 'JWT'
    };

    const payload = {
      sub: subject,
      iat: Math.floor(Date.now() / 1000),
      exp: Math.floor(Date.now() / 1000) + (60 * 60 * 10) // 10 hours
    };

    const base64UrlEncode = (obj: any) => btoa(JSON.stringify(obj)).replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
    const headerEncoded = base64UrlEncode(header);
    const payloadEncoded = base64UrlEncode(payload);

    const signature = this.hmacSHA256(`${headerEncoded}.${payloadEncoded}`, this.secretKey);
    return `${headerEncoded}.${payloadEncoded}.${signature}`;
  }

  validateToken(token: string): any {
    try {
      return this.jwtHelper.decodeToken(token);
    } catch (error) {
      console.error('Invalid token', error);
      return null;
    }
  }

  private hmacSHA256(data: string, key: string): string {
    // Implementing HMAC-SHA256 encryption here
    return CryptoJS.HmacSHA256(data, key).toString(CryptoJS.enc.Base64).replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
  }
}
