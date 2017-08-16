import {NgModule} from '@angular/core';

import {SharedModule} from "../shared/shared.module";

import {BookComponent} from './_components/book/book.component';
import {BooksListComponent} from './_components/books-list/books-list.component';
import {BookAddComponent} from './_components/book-add/book-add.component';
import { BookEditComponent } from './_components/book-edit/book-edit.component';
import { BookEditableComponent } from './_components/book-editable/book-editable.component'


@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [BookComponent, BooksListComponent, BookAddComponent, BookEditComponent, BookEditableComponent],
  exports: [BookComponent, BooksListComponent, BookAddComponent, BookEditableComponent]
})
export class BookModule {
}
