import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickToPayDropInUIComponent } from './click-to-pay-drop-in-ui.component';

describe('ClickToPayDropInUIComponent', () => {
  let component: ClickToPayDropInUIComponent;
  let fixture: ComponentFixture<ClickToPayDropInUIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClickToPayDropInUIComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClickToPayDropInUIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
