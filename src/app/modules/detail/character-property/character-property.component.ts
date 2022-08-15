import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-character-property',
  templateUrl: './character-property.component.html',
  styleUrls: ['./character-property.component.scss']
})
export class CharacterPropertyComponent implements OnInit {

  @Input() property: string = '';

  @Input() value: string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
