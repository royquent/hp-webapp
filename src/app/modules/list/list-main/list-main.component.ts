import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Base64Service } from 'src/app/services/base64.service';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-list-main',
  templateUrl: './list-main.component.html',
  styleUrls: ['./list-main.component.scss']
})
export class ListMainComponent implements OnInit, OnDestroy {

  sub: Subscription = new Subscription();
  name: string = '';
  loaded = false;
  charList: any;

  breadcrumbPath: any = [
    {
      label: 'Home',
      route: ['/']
    },
  ];

  constructor(
    private base64Service: Base64Service,
    private charactersService: CharactersService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.charList = this.route.snapshot.data['characters'];
    this.charactersService.setCharList = this.charList;
    this.route.params
      .subscribe(params => {
        this.name = params['name'];
        this.breadcrumbPath.push({
          label: this.name[0].toUpperCase() + this.name.slice(1),
          route: null
        });
      });
  }

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

  base64EncodeName(name: string): string {
    return this.base64Service.encode(name);
  }


}
