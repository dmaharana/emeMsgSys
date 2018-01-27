import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { ModalDemoComponent } from './modal-demo/modal-demo.component';
import { DemoComponent } from './demo/demo.component';
import { DemoModalComponent } from './demo-modal/demo-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    ModalDemoComponent,
    DemoComponent,
    DemoModalComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
