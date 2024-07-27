import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { CaptureContextResponseBody } from '../models/capture-context-response-body';

@Injectable({
  providedIn: 'root'
})
export class CaptureContextService {
  private apiUrl = `${environment.apiUrl}/capture-context`;

  constructor(private http: HttpClient) {}

  getCaptureContext(): Observable<CaptureContextResponseBody> {
    return this.http.get<CaptureContextResponseBody>(this.apiUrl);
  }
}
