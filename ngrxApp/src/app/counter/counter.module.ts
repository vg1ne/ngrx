import {NgModule} from '@angular/core';

import {CounterEffects} from "./_effects/counter.effects"
import {EffectsModule} from "@ngrx/effects";
import {StoreModule} from "@ngrx/store";

import {counterReducer} from "./_reducers/counter"
import {CounterComponent} from './_components/counter/counter.component';
import {SharedModule} from "../shared/shared/shared.module";


@NgModule({
  imports: [
    SharedModule,
    EffectsModule.forRoot([CounterEffects]),
    StoreModule.forRoot({counter: counterReducer}),
  ],
  declarations: [CounterComponent],
  exports: [CounterComponent]
})
export class CounterModule {
}
