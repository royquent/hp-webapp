import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-char-picture-house',
  templateUrl: './char-picture-house.component.html',
  styleUrls: ['./char-picture-house.component.scss']
})
export class CharPictureHouseComponent implements OnInit {

  @Input() image: string = '';
  @Input() house: string = '';

  constructor() { }

  ngOnInit(): void {
    
  }

}
