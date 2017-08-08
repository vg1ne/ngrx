import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms"

import { StoreModule } from '@ngrx/store';
// import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {counterReducer} from "./_reducers/counter"

import { AppComponent } from './app.component';


// const initialStateFromSomewhere = { counter: 3 };
// const initialState = { counter: 2 };
// export function getInitialState() {
//   return {...initialState, ...initialStateFromSomewhere};
// }

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({counter: counterReducer}),
    StoreDevtoolsModule.instrument({
      maxAge: 5
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
// StoreModule.forRoot(counterReducer, {initialState: getInitialState}),
