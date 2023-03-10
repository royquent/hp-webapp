import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Base64Service {

  constructor() { }

  encode(str: string): string {
    return window.btoa(str);
  }

  decode(str: string): string {
    return window.atob(str);
  }
}
