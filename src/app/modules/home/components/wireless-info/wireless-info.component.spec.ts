import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WirelessInfoComponent } from './wireless-info.component';

describe('WirelessInfoComponent', () => {
  let component: WirelessInfoComponent;
  let fixture: ComponentFixture<WirelessInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WirelessInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WirelessInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
