import { Component, OnInit } from '@angular/core';
import { Books} from "../../books";
import {Store, StoreModule} from "@ngrx/store";
import {Book} from "../../_models/book.model";
import {Observable} from "rxjs/Observable";
import {INIT_ALL_BOOKS, InitAll} from "../../_actions/book.actions"

interface BooksStore {
  books: Book[]
}

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {
  books: Observable<Book[]>

  constructor(private store: Store<BooksStore>) {
    this.store.dispatch(new InitAll(Books))
    this.books = store.select('books')
  }

  ngOnInit() {

  }

}
