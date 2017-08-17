import {NgModule} from '@angular/core';

import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {Actions, EffectsModule} from '@ngrx/effects';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';

import {SharedModule} from "./shared/shared.module"

import {AppComponent} from './app.component';
import {BookModule} from "./book/book.module"

import {StoreModule} from "@ngrx/store";

import {bookReducer} from "./book/_reducers/books.reducer";
import {BookEffect} from "./book/_effects/book.effect";
import {RouterModule, Routes} from "@angular/router";
import {BooksListComponent, BooksStore} from "./book/_components/books-list/books-list.component";
import {BookAddComponent} from "./book/_components/book-add/book-add.component";
import {BookBasketComponent} from './book/_components/book-basket/book-basket.component';

import {BooksService} from "./books.service"
import {BookEditComponent} from "./book/_components/book-edit/book-edit.component";
import {selectedBookReducer} from "./book/_reducers/selected-book.reducer";

const appRoutes: Routes = [
  {path: '', redirectTo: '/books', pathMatch: 'full'},
  {path: 'books', component: BooksListComponent},
  {path: 'book-add', component: BookAddComponent},
  {path: 'book-edit', component: BookEditComponent},
  {path: 'book-basket', component: BookBasketComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    BookBasketComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,

    RouterModule.forRoot(appRoutes),

    StoreModule.forRoot({
      books: bookReducer,
      selectedBook: selectedBookReducer
    }),
    EffectsModule.forRoot([BookEffect]),
    StoreDevtoolsModule.instrument({
      maxAge: 20
    }),
    BookModule
  ],
  providers: [
    Actions,
    BooksService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
