import { Component, OnInit } from '@angular/core';
import { CaptureContextResponseBody } from '../../models/capture-context-response-body';
import { CaptureContextService } from '../../services/capture-context.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-click-to-pay-drop-in-ui',
  templateUrl: './click-to-pay-drop-in-ui.component.html',
  styleUrl: './click-to-pay-drop-in-ui.component.scss',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  providers: [
    CaptureContextService,
  ]
})
export class ClickToPayDropInUIComponent implements OnInit {
  captureContextData: CaptureContextResponseBody | null = null;
  clickToPayUIContent: string = '';

  constructor(
    private captureContextService: CaptureContextService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.fetchCaptureContext();
    this.getClickToPayUI();
  }

  fetchCaptureContext(): void {
    this.captureContextService.getCaptureContext().subscribe({
      next: (data: CaptureContextResponseBody) => {
        this.captureContextData = data;
      },
      error: (error: any) => {
        console.error('Error fetching capture context:', error);
      }
    });
  }

  getClickToPayUI(): void {
    this.http.get(`${environment.apiUrl}/click-to-pay`, { responseType: 'text' })
      .subscribe({
        next: (response: string) => {
          this.clickToPayUIContent = response;
        },
        error: (error: any) => {
          console.error('Error fetching Click to Pay UI content:', error);
        }
      });
  }
}