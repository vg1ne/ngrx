import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MdCardModule} from '@angular/material';

import {EffectsModule} from "@ngrx/effects";
import {StoreModule} from "@ngrx/store";

import {bookReducer} from "./_reducers/book.reducer";
import { BookComponent } from './_components/book/book.component';
import { BooksListComponent } from './_components/books-list/books-list.component'

@NgModule({
  imports: [
    CommonModule,
    MdCardModule,
    StoreModule.forRoot({books: bookReducer})
  ],
  declarations: [BookComponent, BooksListComponent],
  exports: [BookComponent, BooksListComponent]
})
export class BookModule { }
