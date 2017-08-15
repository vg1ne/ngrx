import { Injectable } from '@angular/core';
import {Http, RequestOptions} from "@angular/http";
import {Book} from "./book/_models/book.model";


@Injectable()
export class BooksService {
  private api: string = "/api/books"
  constructor(private http: Http) {}

  getAllBooks(){
    return this.http.get('/api/books')
      .map(res=>res.json())
  }
  addBook(book: Book){
    return this.http.post(this.api,
      book
    )
  }
  deleteBook(book: Book){
    return this.http.delete(
      this.api + "/?id=" + book._id
    )
  }
}
