import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wireless-preview',
  templateUrl: './wireless-preview.component.html',
  styleUrls: ['./wireless-preview.component.scss']
})
export class WirelessPreviewComponent implements OnInit {
  preview = 'box';
  box = '../../../../../assets/images/box.png';
  earbuds = '../../../../../assets/images/earbuds.png';
  earbudsDetails = '../../../../../assets/images/earbudsDetails.png';

  constructor() { }

  ngOnInit(): void {
  }
  showPreview(image: string){
    this.preview = image;
  }
}
