import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatsInComponent } from './whats-in.component';

describe('WhatsInComponent', () => {
  let component: WhatsInComponent;
  let fixture: ComponentFixture<WhatsInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhatsInComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatsInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
