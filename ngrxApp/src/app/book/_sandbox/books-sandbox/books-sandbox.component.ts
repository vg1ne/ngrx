import { Component } from '@angular/core';
import {InitAll} from "../../_actions/book.actions";
import {BooksService} from "../../../books.service";
import {Store} from "@ngrx/store";
import {BooksStore} from "../../_components/books-list/books-list.component";
import {Observable} from "rxjs/Observable";
import {Book} from "../../_models/book.model";

@Component({
  selector: 'app-books-sandbox',
  templateUrl: './books-sandbox.component.html'
})
export class BooksSandboxComponent {
  books: Observable<Book[]>
  constructor(private store: Store<BooksStore>,
              private booksService: BooksService) {

    booksService
      .getAllBooks()
      .subscribe(res => {
        this.store.dispatch(new InitAll(res.data))
      })
  }
}
