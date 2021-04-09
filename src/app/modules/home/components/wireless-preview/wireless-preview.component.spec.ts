import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WirelessPreviewComponent } from './wireless-preview.component';

describe('WirelessPreviewComponent', () => {
  let component: WirelessPreviewComponent;
  let fixture: ComponentFixture<WirelessPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WirelessPreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WirelessPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
