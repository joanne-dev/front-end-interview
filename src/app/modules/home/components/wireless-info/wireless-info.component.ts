import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-wireless-info',
  templateUrl: './wireless-info.component.html',
  styleUrls: ['./wireless-info.component.scss']
})
export class WirelessInfoComponent implements OnInit {
  features = '/landing/features';
  overview = '/landing/overview';
  whatsIn = '/landing/whats-in';
  constructor() { }

  ngOnInit(): void {
  }
}
