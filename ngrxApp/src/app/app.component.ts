import { Component } from '@angular/core';
import {Action, Store} from "@ngrx/store";
import {SelectTab} from "./_actions/user.actions";
import {Observable} from "rxjs/Observable";
import {Subject} from "rxjs/Subject";

export class AppStore{
  selectedTab: number
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
    this.selectedTab$ = store.select(state => state.selectedTab)
    store.dispatch(new SelectTab(1))
  }
  selectChange($event){
    this.appStore.dispatch(new SelectTab($event.index))
  }
}
