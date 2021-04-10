import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import * as wirelessInfo from '../../../../../assets/json/wireless-info.json';
@Component({
  selector: 'app-preferences',
  templateUrl: './preferences.component.html',
  styleUrls: ['./preferences.component.scss']
})
export class PreferencesComponent implements OnInit {
  features: any[];
  @Output() price = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
    this.features = wirelessInfo.wireless.features;
    this.reDisplayCards();
  }
  getPrice(model){
    this.price.emit(model);
  }
  reDisplayCards(){
    if (window.matchMedia('(min-width: 767px)').matches) {
      this.features[0].display = 'flex';
      this.features[0].item[0].margin = '16.46px';
    } else {
      this.features[0].display = 'block';
      this.features[0].item[0].margin = '0';
    }
  }
  validateTitle(feature){
    return feature.title === 'Would you like to add extended' && (window.matchMedia('(min-width: 767px)').matches);
  }
}
