import {Component, Input, Output} from '@angular/core';
import {EventEmitter} from "@angular/core"
import {Book} from "../../_models/book.model"

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {
  @Input() book: Book
  @Output() buy: EventEmitter<Book> = new EventEmitter()
  constructor(){
  }
  buyBook(){
    this.buy.emit(this.book)
  }
  get isBuyDisabled(){
    return this.book.count<1
  }
}
