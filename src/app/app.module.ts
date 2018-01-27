import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';


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
    FormsModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
