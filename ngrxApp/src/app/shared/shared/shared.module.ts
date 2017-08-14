import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from "@angular/forms"

import {MdTabsModule} from '@angular/material';
import {MdCardModule} from '@angular/material';
import {MdButtonModule} from '@angular/material';
import {MdInputModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,

    MdTabsModule,
    MdCardModule,
    MdButtonModule,
    MdInputModule
  ],
  declarations: [],
  exports: [
    CommonModule,
    FormsModule,
    MdTabsModule,
    MdCardModule,
    MdButtonModule,
    MdInputModule]
})
export class SharedModule {
}
