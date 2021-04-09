import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WirelessLandingComponent } from './wireless-landing.component';

describe('WirelessLandingComponent', () => {
  let component: WirelessLandingComponent;
  let fixture: ComponentFixture<WirelessLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WirelessLandingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WirelessLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
