import { Component, OnInit } from '@angular/core';
import { Books} from "../../books";
import {Store} from "@ngrx/store";
import {Book} from "../../_models/book.model";
import {Observable} from "rxjs/Observable";
import {BuyBook, InitAll, RemoveBook} from "../../_actions/book.actions"

export interface BooksStore {
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
  onBuy(book: Book){
    this.store.dispatch(new BuyBook(book))
  }
  onRemove(book: Book){
    this.store.dispatch(new RemoveBook(book))
  }
  ngOnInit() {

  }

}
