import { Component } from '@angular/core';
import {Store} from "@ngrx/store";
import {BooksStore} from "../books-list/books-list.component"
import {Book} from "../../_models/book.model"
import {AddBook} from "../../_actions/book.actions";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-books-edit',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.css']
})
export class BookAddComponent {
  constructor(private store: Store<BooksStore>) {
  }

  addBook(){
    this.store.dispatch(new AddBook(
      {
        name: this.book.name,
        price: +this.book.price,
        count: +this.book.count
      }
    ))
    this.clearBook()
  }
  clearBook(){
    this.book = new Book()
  }
  books: Observable<Book[]>
  book: Book = new Book()
}
