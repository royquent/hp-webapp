import { Injectable } from '@angular/core';
import {
  Router,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { catchError, Observable, of } from 'rxjs';
import { ICharacter } from '../interfaces/character.interface';
import { CharactersService } from '../services/characters.service';

@Injectable({
  providedIn: 'root'
})
export class CharacterDetailResolver {

  constructor(private charactersService: CharactersService, private router: Router, private toastrService: ToastrService) {}
  
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ICharacter[]|null> {
    const houseName: string = route.paramMap.get('house')!;
    let callService = !(this.charactersService.getCharListValue 
      && this.charactersService.getCharListValue.length 
      && this.charactersService.getCharListValue[0].house.toLowerCase() == houseName.toLowerCase());
      
    return callService ? this.charactersService.callHttpHouseService(houseName).pipe(catchError(error => {
      this.router.navigateByUrl(this.router.url);
      const title = "Sorry, the house-elves are on strike. Our servers are a bit chaotic at the moment.";
      this.toastrService.error(title);
      console.error(error);
      return of(null);
    })): of(null);
  }
}
