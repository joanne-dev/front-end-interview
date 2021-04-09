import { Component, OnInit } from '@angular/core';
import * as wirelessInfo from '../../../../../assets/json/wireless-info.json';
@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  items: any[];
  constructor() { }

  ngOnInit(): void {
    this.items = wirelessInfo.wireless.iconsInfo;
  }

}
