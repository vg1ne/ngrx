import { Component } from '@angular/core';
import {Store} from "@ngrx/store";
import {SelectTab} from "./_actions/user.actions";
import {Observable} from "rxjs/Observable";

export class AppStore{
  selectedTab: number
}

@Component({
  selector: 'app-root',
  templateUrl: "app.component.html",
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedTab: Observable<number>
  constructor(store: Store<AppStore>){
    store.dispatch(new SelectTab(1))
    this.selectedTab= store.select('selectedTab')
  }
}
