import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ICharacter } from 'src/app/interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  private _charList: BehaviorSubject<Array<ICharacter>> = new BehaviorSubject(Array());
  public readonly charList: Observable<Array<ICharacter>> = this._charList.asObservable();
  private charListValue: Array<ICharacter> = []; 

  constructor(private http: HttpClient) { }

  callHttpHouseService(houseName: string): Observable<Array<any>> {
    return this.http.get<Array<any>>(`https://hp-api.onrender.com/api/characters/house/${houseName}`);
  }

  private set setCharListValue(charList: Array<ICharacter>) {
    this.charListValue = charList;
  }

  public get getCharListValue() {
    return this.charListValue;
  }

  set setCharList(charList: Array<ICharacter>) {
    this.setCharListValue = charList;
    this._charList.next(this.getCharListValue);
  }
}
