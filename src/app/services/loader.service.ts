import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  private _showSpinner: BehaviorSubject<boolean> = new BehaviorSubject(false);
  public readonly showSpinner: Observable<boolean> = this._showSpinner.asObservable();
  private timerId: any = null;

  set setShowSpinner(showSpinner: boolean) {
    this._showSpinner.next(showSpinner);
  }

  constructor() { }

  show(): void {
    this.timerId = setTimeout(() => {
        this.setShowSpinner = true;
    }, 600);
  }

  hide(): void {
    this.setShowSpinner = false;
    clearTimeout(this.timerId);
  }


}
