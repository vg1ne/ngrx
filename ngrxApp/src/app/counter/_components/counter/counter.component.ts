import { Component } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Store} from "@ngrx/store"
import * as CounterActions from "../../_actions/counter"

export interface CounterStore {
  counter: number;
}

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  counter: Observable<number>
  incrementStep: number

  constructor(private  store: Store<CounterStore>){
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
