import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ICharacter } from 'src/app/interfaces/character.interface';
import { Base64Service } from 'src/app/services/base64.service';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-detail-main',
  templateUrl: './detail-main.component.html',
  styleUrls: ['./detail-main.component.scss']
})
export class DetailMainComponent implements OnInit, OnDestroy {
  sub: Subscription = new Subscription();
  house: string = '';
  character!: ICharacter;
  breadcrumbPath: any = [
    {
      label: 'Home',
      route: ['/']
    },
  ];
  constructor(
    private base64Service: Base64Service,
    private charactersService: CharactersService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {

    this.route.params
      .subscribe(params => {
        const name = this.base64Service.decode(params['name']);
        this.house = params['house'];
        let list = this.charactersService.getCharListValue;

        if (this.route.snapshot.data['characters']) {
          list = this.route.snapshot.data['characters'];
        }

        for (const char of list) {
          if (char.name === name) {
            this.character = char;
            break;
          }
        }

        this.breadcrumbPath.push({
          'label': this.house[0].toUpperCase() + this.house.slice(1),
          'route': ['/house', this.house.toLowerCase()]
        },{
          'label': this.character ? this.character.name: 'N/A',
          'route': null
        });
      });
  }

  toString(val: any): string {
    return val ? val.toString(): val;
  }

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }


}
