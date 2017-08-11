import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from "@angular/forms"
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {StoreModule} from '@ngrx/store';
import {EffectsModule, Actions} from '@ngrx/effects';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';

import {counterReducer} from "./_reducers/counter"
import {peopleReducer} from "./_reducers/people"

import {CounterEffects} from "./_effects/counter.effects"

import {MdCardModule} from '@angular/material';

import {AppComponent} from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MdCardModule,
    StoreModule.forRoot({counter: counterReducer, people: peopleReducer}),
    StoreDevtoolsModule.instrument({
      maxAge: 20
    }),
    EffectsModule.forRoot([CounterEffects])
  ],
  providers: [
    Actions
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
