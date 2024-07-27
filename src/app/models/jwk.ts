// src/app/models/jwk.ts
export interface JWK {
    kty: string;
    kid: string;
    use: string;
    alg: string;
    n: string;
    e: string;
  }