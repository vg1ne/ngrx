import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Book} from "../../_models/book.model";

@Component({
  selector: 'app-book-editable',
  templateUrl: './book-editable.component.html',
  styleUrls: ['./book-editable.component.css']
})
export class BookEditableComponent {
  @Input() book: Book
  @Output() updateBook: EventEmitter<Book> = new EventEmitter()
  constructor() { }

  update(){
    this.updateBook.emit(this.book)
  }
}
