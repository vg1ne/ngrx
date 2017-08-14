import {NgModule} from '@angular/core';

import {SharedModule} from "../shared/shared.module";

import {BookComponent} from './_components/book/book.component';
import {BooksListComponent} from './_components/books-list/books-list.component';
import {BooksEditComponent} from './_components/books-edit/books-edit.component'


@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [BookComponent, BooksListComponent, BooksEditComponent],
  exports: [BookComponent, BooksListComponent, BooksEditComponent]
})
export class BookModule {
}
