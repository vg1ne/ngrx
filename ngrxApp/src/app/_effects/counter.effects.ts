import {Actions, Effect, toPayload} from "@ngrx/effects"
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import {DECREMENT, INCREMENTBYARG} from '../_actions/counter'
import {Injectable} from "@angular/core";

@Injectable()
export class CounterEffects {
  @Effect({dispatch: false}) decremented$ = this.actions$
    .ofType(DECREMENT)
    .do(action => {console.log(action)})

  @Effect({dispatch: false}) decrementedByArg$ = this.actions$
    .ofType(INCREMENTBYARG)
    .map(toPayload)
    .do(payload => {console.log(payload)})

  constructor(private actions$: Actions){}
}

