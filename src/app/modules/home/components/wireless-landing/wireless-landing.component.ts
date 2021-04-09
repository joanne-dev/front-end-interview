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
  constructor() { }

  ngOnInit(): void {
    this.specifications = wirelessInfo.wireless.specifications;
    this.price = this.initialPrice;
  }
  getPrice(model: IOptionsModel){
    if (!(this.price === this.initialPrice && model.value < 0)){
      this.price = this.price + model.value;
    }
  }
}
