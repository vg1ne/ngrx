import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule } from "@angular/forms"
import { HttpModule } from '@angular/http';

import {FlexLayoutModule} from '@angular/flex-layout'

import {MdTabsModule} from '@angular/material';
import {MdCardModule} from '@angular/material';
import {MdButtonModule} from '@angular/material';
import {MdInputModule} from '@angular/material';
import {MdAutocompleteModule} from '@angular/material';
import {MdChipsModule} from '@angular/material';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,

    FlexLayoutModule,

    MdTabsModule,
    MdCardModule,
    MdButtonModule,
    MdInputModule,
    MdAutocompleteModule,
    MdChipsModule
  ],
  declarations: [],
  exports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MdTabsModule,
    MdCardModule,
    MdButtonModule,
    MdInputModule,
    MdAutocompleteModule,
    MdChipsModule]
})
export class SharedModule {
}
