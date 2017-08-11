import { Actions, Effect} from "@ngrx/effects"
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import {DECREMENT} from '../_actions/counter'
import {Injectable} from "@angular/core";

@Injectable()
export class CounterEffects {
  @Effect({dispatch: false}) decremented$ = this.actions$
    .ofType(DECREMENT)
    .do(action => {console.log(action)})


  constructor(private actions$: Actions){}
}

