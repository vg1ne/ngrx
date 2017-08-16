import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {Book} from "../../_models/book.model";
import {Observable} from "rxjs/Observable";
import {BuyBook, InitAll, DeleteBook} from "../../_actions/book.actions"
import {BooksService} from "../../../books.service";

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

  constructor(private store: Store<BooksStore>,
              private booksService: BooksService) {
    const books = booksService
      .getAllBooks()
      .subscribe(res => {
        this.store.dispatch(new InitAll(res.data))
      })
    this.books = store.select('books')
  }
  onBuy(book: Book){
    this.store.dispatch(new BuyBook(book))
  }
  onRemove(book: Book){
    this.store.dispatch(new DeleteBook(book))
  }
  ngOnInit() {

  }

}
