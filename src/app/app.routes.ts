import { Routes } from '@angular/router';
import { ClickToPayDropInUIComponent } from './components/click-to-pay-drop-in-ui/click-to-pay-drop-in-ui.component';
import { UnifiedCheckoutComponent } from './components/unified-checkout/unified-checkout.component';

export const routes: Routes = [
    { path: 'click-to-pay', component: ClickToPayDropInUIComponent },
    { path: 'unified-checkout', component: UnifiedCheckoutComponent },
    { path: '', redirectTo: '/unified-checkout', pathMatch: 'full' }
];
