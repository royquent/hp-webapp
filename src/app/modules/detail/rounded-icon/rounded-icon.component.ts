import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rounded-icon',
  templateUrl: './rounded-icon.component.html',
  styleUrls: ['./rounded-icon.component.scss']
})
export class RoundedIconComponent implements OnInit {

  @Input() imgSrc: string = "";
  @Input() tooltipText: string = "";

  constructor() { }

  ngOnInit(): void {
    
  }

}
