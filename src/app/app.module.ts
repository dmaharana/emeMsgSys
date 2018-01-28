import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { SamplePageComponent } from './sample-page/sample-page.component';


@NgModule({
  declarations: [
    AppComponent,
    SamplePageComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    MultiselectDropdownModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
