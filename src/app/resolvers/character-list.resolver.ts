import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { ICharacter } from '../interfaces/character.interface';
import { CharactersService } from '../services/characters.service';

@Injectable({
  providedIn: 'root'
})
export class CharacterListResolver implements Resolve<Observable<ICharacter[]>> {

  constructor(private charactersService: CharactersService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ICharacter[]> {
    const houseName: string = route.paramMap.get('name')!;
    return this.charactersService.callHttpHouseService(houseName);
  }
}
