import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {BooksStore} from "./book/_components/books-list/books-list.component";
import {BooksService} from "./books.service"

export class MainStore{
  books: Store<BooksStore>
}

@Component({
  selector: 'app-root',
  templateUrl: "app.component.html",
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  appStore: Store<MainStore>

  constructor(store: Store<MainStore>,
              private booksService: BooksService){
    this.appStore = store
  }
  ngOnInit(){

  }
}
