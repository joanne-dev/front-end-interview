import {Component, Input, OnInit} from '@angular/core';
export interface IOptionsModel {
  name: string;
  value: number;
  tabindex: number;
  id: string;
  title: string;
  subtitle: string;
  price: string;
}
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() radioButtonModel: IOptionsModel;
  constructor() { }

  ngOnInit(): void {
  }

}
