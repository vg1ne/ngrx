import {Component, OnInit} from '@angular/core';
import {BooksStore} from "../books-list/books-list.component";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs/Observable";
import {Book} from "../../_models/book.model";

@Component({
  selector: 'app-book-basket',
  templateUrl: './book-basket.component.html',
  styleUrls: ['./book-basket.component.css']
})
export class BookBasketComponent implements OnInit {
  books: Observable<Book[]>

  constructor(store: Store<BooksStore>) {
    this.books = store.select('books')
  }

  ngOnInit() {
  }

}
