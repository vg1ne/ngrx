import { Component } from '@angular/core';
import {Store} from "@ngrx/store"
import {Observable} from "rxjs/Observable"
import * as CounterActions from "./_actions/counter"
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/do';

interface AppState {
  counter: number;
}

@Component({
  selector: 'app-root',
  templateUrl: "app.component.html",
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  counter: Observable<number>
  incrementStep: number

  constructor(private  store: Store<AppState>){
    this.counter = store.select('counter')
    this.incrementStep = 10;

  }

  increment(){
    this.store.dispatch(new CounterActions.IncrementAction())
  }
  decrement(){
    this.store.dispatch(new CounterActions.DecrementAction())
  }
  reset(){
    this.store.dispatch(new CounterActions.ResetAction())
  }
  incrementByArg(){
    this.store.dispatch(new CounterActions.IncrementByArgAction(+this.incrementStep))
  }
}
