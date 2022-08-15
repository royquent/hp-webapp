import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
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

  constructor(private charactersService: CharactersService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params
      .subscribe(params => {
        console.log(params); // { orderby: "price" }
        this.name = params['name'];

        this.charactersService.getCharList(this.name);
        this.sub = this.charactersService.charList.subscribe(res => {
          this.charList = res;
          this.loaded = true;
        })

      });
  }

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }


}
