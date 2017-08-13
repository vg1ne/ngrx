import {Actions, Effect, toPayload} from "@ngrx/effects"
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import {ADD_BOOK} from '../_actions/book.actions'
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import "rxjs/add/observable/of";
import "rxjs/add/operator/switchMap";

@Injectable()
export class BookEffect {
  @Effect({dispatch: false}) bookAdd$ = this.actions$
    .ofType(ADD_BOOK)
    .do(action => {console.log(action)})
    .switchMap(action => {
      return Observable.of({type: action.type, payload: action.payload})
    })



  constructor(private actions$: Actions){}
}

