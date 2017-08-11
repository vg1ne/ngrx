import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms"

import {MdCardModule} from '@angular/material';

import {CounterEffects} from "./_effects/counter.effects"
import {EffectsModule} from "@ngrx/effects";
import {StoreModule} from "@ngrx/store";


import {counterReducer} from "./_reducers/counter"
import {peopleReducer} from "../people/_reducers/people";
import { CounterComponent } from './_components/counter/counter.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,

    MdCardModule,

    EffectsModule.forRoot([CounterEffects]),
    StoreModule.forRoot({counter: counterReducer, people: peopleReducer}),
  ],
  declarations: [CounterComponent],
  exports: [CounterComponent]
})
export class CounterModule { }
