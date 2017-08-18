import { Component } from '@angular/core';
import {Store} from "@ngrx/store";
import {Book} from "../../_models/book.model";
import {Observable} from "rxjs/Observable";
import {BuyBook, DeleteBook} from "../../_actions/book.actions"

export interface BooksStore {
  books: Book[],
  selectedBook: Book
}

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent{
  books: Observable<Book[]>

  constructor(private store: Store<BooksStore>) {
    this.books = store.select('books')
  }
  onBuy(book: Book){
    this.store.dispatch(new BuyBook(book))
  }
  onRemove(book: Book){
    this.store.dispatch(new DeleteBook(book))
  }
}
