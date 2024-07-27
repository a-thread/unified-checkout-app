import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ClickToPayDropInUIComponent } from './components/click-to-pay-drop-in-ui/click-to-pay-drop-in-ui.component';
import { UnifiedCheckoutComponent } from './components/unified-checkout/unified-checkout.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
  imports: [
    UnifiedCheckoutComponent,
    ClickToPayDropInUIComponent,
    CommonModule,
    RouterModule,
    HttpClientModule,
  ],
})
export class AppComponent {
  title = 'unified-checkout-app';
}
