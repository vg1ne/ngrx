import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Book} from "../../_models/book.model";

@Component({
  selector: 'app-book-basket-item',
  templateUrl: './book-basket-item.component.html',
  styleUrls: ['./book-basket-item.component.css',
    '../book/book.component.css']
})
export class BookBasketItemComponent{
  @Input() book: Book
  @Output() remove: EventEmitter<Book> = new EventEmitter()

  removeBook(){
    this.remove.emit(this.book)
  }
}
