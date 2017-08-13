import { Component } from '@angular/core';
import {Action, Store} from "@ngrx/store";
import {SelectTab} from "./_actions/user.actions";
import {Observable} from "rxjs/Observable";
import {Subject} from "rxjs/Subject";
import {BooksStore} from "./book/_components/books-list/books-list.component";
import {CounterStore} from "./counter/_components/counter/counter.component"

export class AppStore{
  app: {
    selectedTab: number
  };
  counter: Store<CounterStore>;
  book: Store<BooksStore>
}

@Component({
  selector: 'app-root',
  templateUrl: "app.component.html",
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedTab$: Observable<number>
  appStore: Store<AppStore>

  constructor(store: Store<AppStore>){
    this.appStore = store
    this.selectedTab$ = store.select(state => state.app.selectedTab)
    store.dispatch(new SelectTab(0))
  }
  selectChange($event){
    this.appStore.dispatch(new SelectTab($event.index))
  }
}
