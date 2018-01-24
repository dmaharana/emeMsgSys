import { Component, OnInit } from '@angular/core';
import { Alert } from '../alert';
import { AlertMessageService } from '../alert-message.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-alert-dashboard',
  templateUrl: './alert-dashboard.component.html',
  styleUrls: ['./alert-dashboard.component.css']
})
export class AlertDashboardComponent implements OnInit {
  title = 'Alerts List';
  alerts: Alert[] = [];

  constructor(
    private alertMessageService: AlertMessageService,
    private messagesService: MessageService) { }

  ngOnInit() {
    this.getAlerts();
  }

  getAlerts(): void {
    this.alertMessageService.getAlerts()
      .subscribe(alerts => this.alerts = alerts);
  }

  sendMessage(message: string): void {
    console.log(message);
    // this.messagesService.add(message);

  }

}
