import { Component } from '@angular/core';
import {Store} from "@ngrx/store"
import {Observable} from "rxjs/Observable"
import {INCREMENT, DECREMENT, RESET, INCREMENTBYARG, CounterActions} from "./_actions/counter"

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
    this.store.dispatch({type: INCREMENT})
  }
  decrement(){
    this.store.dispatch({type: DECREMENT})
  }
  reset(){
    this.store.dispatch({type: RESET})
  }
  incrementByArg(){
    this.store.dispatch({type: INCREMENTBYARG})
  }
}
