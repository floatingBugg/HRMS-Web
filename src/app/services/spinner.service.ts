import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {
 private count =0;
 public spinner$:BehaviorSubject<boolean>= new BehaviorSubject<boolean>(false);
 private _loading:BehaviorSubject<boolean>= new BehaviorSubject<boolean>(false);
 public readonly loading$ =this._loading.asObservable();
  constructor() { }
  // getSpinnerObserver(): Observable<string>{
  //   return this.spinner$.asObservable();
  // }
  // requestStarted(){
  //   if(++this.count === 1){
  //     this.spinner$.next('start');
  //   }
  // }

  // requestEnded(){
  //   if(this.count === 0 || --this.count === 0 ){s
  //     this.spinner$.next('stop')
  //   }
  // }
  // resetSpinner(){
  //   this.count =0;
  //   this.spinner$.next('stop')
  // }

  show(){
    this._loading.next(true)
  }
  hide(){
    this._loading.next(false)
  }
}
