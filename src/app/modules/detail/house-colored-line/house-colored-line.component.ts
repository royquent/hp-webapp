import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-house-colored-line',
  templateUrl: './house-colored-line.component.html',
  styleUrls: ['./house-colored-line.component.scss']
})
export class HouseColoredLineComponent {

  @Input() houseName: string = "";

}
