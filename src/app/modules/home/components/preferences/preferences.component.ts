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
  }
  getPrice(model){
    this.price.emit(model);
  }
}
