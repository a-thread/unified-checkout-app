import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnifiedCheckoutComponent } from './unified-checkout.component';

describe('UnifiedCheckoutComponent', () => {
  let component: UnifiedCheckoutComponent;
  let fixture: ComponentFixture<UnifiedCheckoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnifiedCheckoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnifiedCheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
