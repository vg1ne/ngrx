import {NgModule} from '@angular/core';

import {SharedModule} from "../shared/shared.module";

import {BookComponent} from './_components/book/book.component';
import {BooksListComponent} from './_components/books-list/books-list.component';
import {BookAddComponent} from './_components/book-add/book-add.component';
import {BookEditComponent} from './_components/book-edit/book-edit.component';
import {BookEditableComponent} from './_components/book-editable/book-editable.component';
import {BooksSandboxComponent} from './_sandbox/books-sandbox/books-sandbox.component';
import {BookBasketItemComponent} from './_components/book-basket-item/book-basket-item.component';


@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [BookComponent, BooksListComponent, BookAddComponent, BookEditComponent,
    BookEditableComponent, BooksSandboxComponent, BookBasketItemComponent],
  exports: [BookComponent, BooksListComponent, BookAddComponent, BookEditableComponent, BooksSandboxComponent,BookBasketItemComponent]
})
export class BookModule {
}
