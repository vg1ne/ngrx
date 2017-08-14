import {NgModule} from '@angular/core';

import {SharedModule} from "../shared/shared.module";

import {EffectsModule} from "@ngrx/effects";
import {StoreModule} from "@ngrx/store";

import {bookReducer} from "./_reducers/book.reducer";
import {BookComponent} from './_components/book/book.component';
import {BooksListComponent} from './_components/books-list/books-list.component';
import {BooksEditComponent} from './_components/books-edit/books-edit.component'
import {BookEffect} from "./_effects/book.effect"


@NgModule({
  imports: [
    SharedModule,
    StoreModule.forRoot({books: bookReducer}),
    EffectsModule.forRoot([BookEffect])
  ],
  declarations: [BookComponent, BooksListComponent, BooksEditComponent],
  exports: [BookComponent, BooksListComponent, BooksEditComponent]
})
export class BookModule {
}
