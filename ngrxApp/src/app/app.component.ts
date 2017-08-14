import { Component } from '@angular/core';
import {Store} from "@ngrx/store";
import {BooksStore} from "./book/_components/books-list/books-list.component";

export class MainStore{
  books: Store<BooksStore>
}

@Component({
  selector: 'app-root',
  templateUrl: "app.component.html",
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  appStore: Store<MainStore>

  constructor(store: Store<MainStore>){
    this.appStore = store
  }
}
