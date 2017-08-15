import { Injectable } from '@angular/core';
import {Http} from "@angular/http";


@Injectable()
export class BooksService {

  constructor(private http: Http) { }

  getAllPosts(){
    return this.http.get('/api/books')
      .map(res=>res.json())
  }
}
