import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule } from "@angular/forms"
import { HttpModule } from '@angular/http';

import {MdTabsModule} from '@angular/material';
import {MdCardModule} from '@angular/material';
import {MdButtonModule} from '@angular/material';
import {MdInputModule} from '@angular/material';
import {MdAutocompleteModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,

    MdTabsModule,
    MdCardModule,
    MdButtonModule,
    MdInputModule,
    MdAutocompleteModule
  ],
  declarations: [],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MdTabsModule,
    MdCardModule,
    MdButtonModule,
    MdInputModule,
    MdAutocompleteModule]
})
export class SharedModule {
}
