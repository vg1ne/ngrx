import { Component } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Book} from "../../_models/book.model";
import {Store} from "@ngrx/store";
import {BooksStore} from "../books-list/books-list.component";
import {SelectBook, UpdateBook} from "../../_actions/book.actions";
import {FormControl} from '@angular/forms';
import "rxjs";

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent {
  books: Book[]
  bookFormControl: FormControl;
  filteredBooks$: Observable<Book[]>
  selectedBook$: Observable<Book>

  constructor(private store: Store<BooksStore>) {
    this.bookFormControl = new FormControl()

    const books$ = store.select('books')
    books$.subscribe(books => {
      this.books = books
    })
    this.filteredBooks$ = this.bookFormControl.valueChanges
      .startWith(null)
      .map((book) => {
        return book && typeof book === 'object' ? book.name: book
      })
      .map((name) => {
        return this.filterBooks(name)
      });

    this.selectedBook$ = store.select('selectedBook')
  }

  filterBooks(name: string) {
    if(!name) return this.books

    return this.books
      .filter(book => book.name.toLowerCase().indexOf(name.toLowerCase()) === 0)
  }
  displayFn(book: Book){
    return book ? book.name : book
  }

  selectOption(book:Book){
    this.store.dispatch(new SelectBook(book))
  }
  updateBook(book:Book){
    this.store.dispatch(new UpdateBook(book))
  }
}
