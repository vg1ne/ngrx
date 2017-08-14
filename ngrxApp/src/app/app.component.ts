import { Component } from '@angular/core';
import {Store} from "@ngrx/store";
import {SelectTab} from "./_actions/user.actions";
import {Observable} from "rxjs/Observable";
import {BooksStore} from "./book/_components/books-list/books-list.component";
import {CounterStore} from "./counter/_components/counter/counter.component"

export interface AppStore{
  selectedTab: number
}

export class MainStore{
  app: AppStore
  counter: Store<CounterStore>
  book: Store<BooksStore>
}

@Component({
  selector: 'app-root',
  templateUrl: "app.component.html",
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedTab$: Observable<number>
  appStore: Store<MainStore>

  constructor(store: Store<MainStore>){
    this.appStore = store
    this.selectedTab$ = store.select(state => state.app.selectedTab)
    store.dispatch(new SelectTab(0))
  }
  selectChange($event){
    this.appStore.dispatch(new SelectTab($event.index))
  }
}
