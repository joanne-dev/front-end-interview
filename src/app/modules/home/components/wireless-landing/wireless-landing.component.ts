import { Component, OnInit } from '@angular/core';
import * as wirelessInfo from '../../../../../assets/json/wireless-info.json';
@Component({
  selector: 'app-wireless-landing',
  templateUrl: './wireless-landing.component.html',
  styleUrls: ['./wireless-landing.component.scss']
})
export class WirelessLandingComponent implements OnInit {
  specifications: any[];
  constructor() { }

  ngOnInit(): void {
    this.specifications = wirelessInfo.wireless.specifications;
  }

}
