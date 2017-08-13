import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from "@angular/forms"
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {Actions} from '@ngrx/effects';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';

import {MdTabsModule} from '@angular/material';

import {AppComponent} from './app.component';
import {CounterModule} from "./counter/counter.module"
import {BookModule} from "./book/book.module"

import { userActionsReducer} from "./_reducers/user.actions"
import { StoreModule} from "@ngrx/store";
import {counterReducer} from "./counter/_reducers/counter";
import {bookReducer} from "./book/_reducers/book.reducer";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,

    MdTabsModule,

    StoreDevtoolsModule.instrument({
      maxAge: 20
    }),
    StoreModule.forRoot({
      app: userActionsReducer,
      counter: counterReducer,
      books: bookReducer
    }),

    CounterModule,
    BookModule
  ],
  providers: [
    Actions
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
