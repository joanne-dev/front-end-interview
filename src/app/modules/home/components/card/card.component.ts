import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
export interface IOptionsModel {
  name: string;
  value: number;
  tabindex: number;
  id: string;
  title: string;
  subtitle: string;
}
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() radioButtonModel: IOptionsModel;
  @Output() price = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }
  changeGender(event){
    this.price.emit(event);
  }

}
