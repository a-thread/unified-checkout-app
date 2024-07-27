import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ClickToPayDropInUIComponent } from './components/click-to-pay-drop-in-ui/click-to-pay-drop-in-ui.component';
import { UnifiedCheckoutComponent } from './components/unified-checkout/unified-checkout.component';

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
  ],
})
export class AppComponent {
  title = 'unified-checkout-app';
}
