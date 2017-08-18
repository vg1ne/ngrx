import {Component, OnInit} from '@angular/core';
import {BooksStore} from "../books-list/books-list.component";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs/Observable";
import {Book} from "../../_models/book.model";
import {selectBooksInBasket} from "../../_reducers/books.reducer";
import {RemoveFromBasket} from "../../_actions/book.actions";

@Component({
  selector: 'app-book-basket',
  templateUrl: './book-basket.component.html',
  styleUrls: ['./book-basket.component.css']
})
export class BookBasketComponent {
  books$: Observable<Book[]>
  store$: Store<BooksStore>

  constructor(store: Store<BooksStore>) {
    this.store$ = store
    this.books$ = store.select(selectBooksInBasket)
  }

  removeFromBasket(book: Book){
    this.store$.dispatch(new RemoveFromBasket(book._id))
  }
}
