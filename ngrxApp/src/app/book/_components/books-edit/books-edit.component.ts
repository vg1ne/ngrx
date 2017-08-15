import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {BooksStore} from "../books-list/books-list.component"
import {Book} from "../../_models/book.model"
import {AddBook} from "../../_actions/book.actions";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-books-edit',
  templateUrl: './books-edit.component.html',
  styleUrls: ['./books-edit.component.css']
})
export class BooksEditComponent implements OnInit {
  constructor(private store: Store<BooksStore>) {
  }

  ngOnInit() {
  }
  addBook($event){
    this.store.dispatch(new AddBook(
      {
        name: this.name,
        price: +this.price,
        count: +this.count
      }
    ))
    this.name = ''
    this.price = ''
    this.count = ''
  }
  books: Observable<Book[]>
  name: string;
  price: string;
  count: string;
}
