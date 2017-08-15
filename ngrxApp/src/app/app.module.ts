import {NgModule} from '@angular/core';

import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {Actions, EffectsModule} from '@ngrx/effects';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';

import {SharedModule} from "./shared/shared.module"

import {AppComponent} from './app.component';
import {BookModule} from "./book/book.module"

import {StoreRouterConnectingModule, routerReducer} from '@ngrx/router-store';
import {StoreModule} from "@ngrx/store";

import {bookReducer} from "./book/_reducers/book.reducer";
import {BookEffect} from "./book/_effects/book.effect";
import {RouterModule, Routes} from "@angular/router";
import {BooksListComponent} from "./book/_components/books-list/books-list.component";
import {BooksEditComponent} from "./book/_components/books-edit/books-edit.component";
import {BookBasketComponent} from './book-basket/book-basket.component';

import {BooksService} from "./books.service"

const appRoutes: Routes = [
  {path: '', redirectTo: '/books', pathMatch: 'full'},
  {path: 'books', component: BooksListComponent},
  {path: 'book-add', component: BooksEditComponent},
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
      books: bookReducer
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
