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
  drillMode = true;
  modeType = 'Drill';
  messageHeader = '';
  messageEnding = '';

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
    if (!this.drillMode) {
      this.messageHeader = 'REAL THREAT: ';
      this.messageEnding = '\n!!! THIS is NOT a DRILL !!!';
    } else {
      this.messageHeader = 'Test Message: ';
      this.messageEnding = '\n!!! this is a DRILL !!!';
    }

    this.messagesService.add(this.messageHeader + message + this.messageEnding);
  }

  toggleMode(): void {
    this.drillMode = !this.drillMode;
    if (!this.drillMode) {
      this.modeType = 'REAL';
    } else {
      this.modeType = 'Drill';
    }
    this.messagesService.add(`Drill mode: ${this.drillMode}`);
  }

}
