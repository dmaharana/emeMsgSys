import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { AlertMessageService } from './alert-message.service';
import { MessageService } from './message.service';
import { InMemoryDataService } from './in-memory-data.service';
import { AlertDashboardComponent } from './alert-dashboard/alert-dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    AlertDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    AlertMessageService,
    MessageService,
    InMemoryDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
