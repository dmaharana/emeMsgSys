import { Component, OnInit } from '@angular/core';
import { Alert } from '../alert';
import { AlertMessageService } from '../alert-message.service';

@Component({
  selector: 'app-alert-dashboard',
  templateUrl: './alert-dashboard.component.html',
  styleUrls: ['./alert-dashboard.component.css']
})
export class AlertDashboardComponent implements OnInit {

  alerts: Alert[] = [];

  constructor(private alertMessageService: AlertDashboardComponent) { }

  ngOnInit() {
  }

  getAlerts(): void {
    this.alertMessageService.getAlerts()
      .subscribe(alerts => this.alerts = alerts);
  }

}
