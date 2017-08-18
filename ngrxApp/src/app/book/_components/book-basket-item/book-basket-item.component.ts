import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Book} from "../../_models/book.model";

@Component({
  selector: 'app-book-basket-item',
  templateUrl: './book-basket-item.component.html',
  styleUrls: ['./book-basket-item.component.css',
    '../book/book.component.css']
})
export class BookBasketItemComponent{
  @Input() book: Book
  // @Output() buy: EventEmitter<Book> = new EventEmitter()
  // @Output() remove: EventEmitter<Book> = new EventEmitter()

  // buyBook(){
  //   this.buy.emit(this.book)
  // }
  // removeBook(){
  //   this.remove.emit(this.book)
  // }
  get isBuyDisabled(){
    return this.book.count<1
  }
  get available(){
    return this.book.count - this.book.bought
  }

}
