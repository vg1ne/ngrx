import {State, Store} from "@ngrx/store";

export abstract class Sandbox {
  // protected loggedUser$ = this.appState$.select(store.getLoggedUser);
  //
  // constructor(protected appState$: Store<store.State>) {}
  //
  // /**
  //  * Returns complete or partial state from the store
  //  *
  //  * @param store
  //  * @param property
  //  */
  // export function getState(store: Store<State>, property?: string): State {
  //   let state: State;
  //
  //   store.take(1).subscribe(s => state = s);
  //
  //   return property ? state[property] : state;
  // }
}
