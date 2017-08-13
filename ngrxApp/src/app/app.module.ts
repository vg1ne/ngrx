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
