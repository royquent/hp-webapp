import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  private _charList: BehaviorSubject<Array<any>> = new BehaviorSubject(Array());
  public readonly charList: Observable<Array<any>> = this._charList.asObservable();

  constructor(private http: HttpClient) { }

  callHttpHouseService(houseName: string): Observable<Array<any>> {
    return this.http.get<Array<any>>(`https://hp-api.onrender.com/api/characters/house/${houseName}`);
  }

  getCharList(houseName: string): void {
    this.callHttpHouseService(houseName).subscribe( res  => {
      this._charList.next(res);
    })
  }
}
