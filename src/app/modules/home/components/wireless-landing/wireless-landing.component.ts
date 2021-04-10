import { Component, OnInit } from '@angular/core';
import * as wirelessInfo from '../../../../../assets/json/wireless-info.json';
import {IOptionsModel} from '../card/card.component';
@Component({
  selector: 'app-wireless-landing',
  templateUrl: './wireless-landing.component.html',
  styleUrls: ['./wireless-landing.component.scss']
})
export class WirelessLandingComponent implements OnInit {
  specifications: any[];
  initialPrice = 295.95;
  price;
  firstSection;
  headerSection;
  firstSectionProperties;
  headerSectionProperties;
  constructor() {
    window.addEventListener('scroll', this.scroll, true);
  }

  ngOnInit(): void {
    this.specifications = wirelessInfo.wireless.specifications;
    this.price = this.initialPrice;
    this.firstSection = document.getElementById('first-section');
    this.headerSection = document.getElementById('header');
  }

  scroll = (event: any): void => {
    if (window.matchMedia('(min-width: 1280px)').matches){
      this.firstSectionProperties = this.firstSection.getBoundingClientRect();
      this.headerSectionProperties = this.headerSection.getBoundingClientRect();
      if (this.headerSectionProperties.top <= -100) {
        this.firstSection.style.top = '20px';
        this.firstSection.style.position = 'fixed';
      } else {
        this.firstSection.style.top = '128.15625px';
        this.firstSection.style.position = 'absolute';
      }
    }
  }
  getPrice(model: IOptionsModel){
    if (!(this.price === this.initialPrice && model.value < 0)){
      this.price = this.price + model.value;
    }
  }
}
