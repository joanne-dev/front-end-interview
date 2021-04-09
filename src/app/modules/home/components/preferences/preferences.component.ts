import { Component, OnInit } from '@angular/core';
import * as wirelessInfo from '../../../../../assets/json/wireless-info.json';
@Component({
  selector: 'app-preferences',
  templateUrl: './preferences.component.html',
  styleUrls: ['./preferences.component.scss']
})
export class PreferencesComponent implements OnInit {
  features: any[];
  constructor() { }

  ngOnInit(): void {
    this.features = wirelessInfo.wireless.features;
  }

}
