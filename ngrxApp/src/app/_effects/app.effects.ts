import {Actions, Effect} from "@ngrx/effects"
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import {Injectable} from "@angular/core";
import 'rxjs/Rx';
import {ADD_BOOK} from "../book/_actions/book.actions";
import {SelectTab} from "../_actions/user.actions";

@Injectable()
export class AppEffects {
  @Effect({dispatch: false}) selectTab$ = this.actions$
    .ofType(ADD_BOOK)
    .map(action => action['payload'])
    .switchMap(payload => {
      return [
        new SelectTab(0)
      ]
    })
  constructor(private actions$: Actions){}
}

