import { Component } from '@angular/core';
import {Store} from "@ngrx/store"
import {Observable} from "rxjs/Observable"
import * as CounterActions from "./_actions/counter"

interface AppState {
  counter: number;
}

@Component({
  selector: 'app-root',
  template: `
		<button (click)="increment()">Increment</button>
		<div>Current Count: {{ counter | async }}</div>
		<button (click)="decrement()">Decrement</button>

		<button (click)="reset()">Reset Counter</button>
    <button (click)="incrementByArg()">Increment by 10</button>
	`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  counter: Observable<number>

  constructor(private  store: Store<AppState>){
    this.counter = store.select('counter')
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
    this.store.dispatch(new CounterActions.IncrementByArgAction(10))
  }
}
