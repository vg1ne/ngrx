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
  selectedTab: number = 0

  constructor(store: Store<AppStore>){
    store.dispatch(new SelectTab(1))
    const selectedTab$ = store.select('selectedTab')
    selectedTab$.subscribe(val => {
      this.selectedTab = val
      console.log(val)
    })
  }

}
