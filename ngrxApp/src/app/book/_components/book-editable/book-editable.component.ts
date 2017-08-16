import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Book} from "../../_models/book.model";

@Component({
  selector: 'app-book-editable',
  templateUrl: './book-editable.component.html',
  styleUrls: ['./book-editable.component.css']
})
export class BookEditableComponent implements OnInit {
  @Input() book: Book
  @Output() updateBook: EventEmitter<Book> = new EventEmitter()
  constructor() { }

  ngOnInit() {
  }

  update(){
    this.updateBook.emit(this.book)
  }
}
