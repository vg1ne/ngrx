import {Actions, Effect} from "@ngrx/effects"
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import 'rxjs/Rx';
import {ADD_BOOK, AddBook} from "../book/_actions/book.actions";
import {AppStore} from "../app.component";
import {Store} from "@ngrx/store";
import {SelectTab} from "../_actions/user.actions";

@Injectable()
export class AppEffects {
  @Effect({dispatch: false}) selectTab$ = this.actions$
    .ofType(ADD_BOOK)
    .map(action => action['payload'])
    .mergeMap(payload => {
      return [
        new SelectTab(0)
      ]
    })
  constructor(private actions$: Actions,
              private appStore: Store<AppStore>){}
}

