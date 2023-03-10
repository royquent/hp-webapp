import { AfterContentInit, AfterViewInit, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Base64Service } from 'src/app/services/base64.service';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-detail-main',
  templateUrl: './detail-main.component.html',
  styleUrls: ['./detail-main.component.scss']
})
export class DetailMainComponent implements OnInit, OnDestroy {
  sub: Subscription = new Subscription();
  character: any;
  constructor(
    private base64Service: Base64Service,
    private charactersService : CharactersService, 
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {

    this.route.params
    .subscribe(params => {
      const name = params['name'];
      this.sub = this.charactersService.charList.subscribe(list => {
        if(!list || list.length == 0){
          this.router.navigate(['']);
        }else {
          for(const char of list){
            if(char.name === this.base64Service.decode(name)){
              this.character = char;
              break;
            }
          }
        }
        
      })
      
    });

  }

  ngOnDestroy(): void {
    if(this.sub){
      this.sub.unsubscribe();
    }
  }


}
