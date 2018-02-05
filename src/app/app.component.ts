import { Component } from '@angular/core';
import {NgRedux, select, NgReduxModule} from '@angular-redux/store';
import {AppState} from './store/state.model';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  template: `<button (click)="myTest()"> Bla Bla Test </button>
    <input type="number" [(ngModel)] = "myTextVal"/>
  <li *ngFor='let item of num | async; '>{{item}} </li>`
})
export class AppComponent {
  @select('num') readonly num: Observable<any>;
  myTextVal: number;

  constructor(private ngRedux: NgRedux<AppState>) {
    this.num.subscribe(newList => console.log(newList));
  }
  myTest() {
    this.ngRedux.dispatch({
      type: '',
      payload: this.myTextVal
    });
  }
}
