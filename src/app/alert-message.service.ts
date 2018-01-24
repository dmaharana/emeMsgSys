import { Injectable } from '@angular/core';
import { Alert } from './alert';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class AlertMessageService {
  private alertsUrl = 'api/alerts';

  constructor(
    private messageService: MessageService,
    private http: HttpClient
  ) { }

  getAlerts (): Observable<Alert[]> {
    return this.http.get<Alert[]>(this.alertsUrl).pipe(
      tap(alerts => this.log(`fetched alerts`)),
      catchError(this.handleError('getAlerts', []))
    );
  }

  getAlert (id: number): Observable<Alert> {
    const url = `${this.alertsUrl}/${id}`;

    return this.http.get<Alert>(url).pipe(
      tap(_ => this.log(`fetched alert id=${id}`)),
      catchError(this.handleError<Alert>(`getAlert id=${id}`))
    );
  }

  updateAlert (alert: Alert): Observable<any> {
    return this.http.put(this.alertsUrl, alert, httpOptions).pipe(
      tap(_ => this.log(`updated alert id=${alert.id}`)),
      catchError(this.handleError<any>(`updated alert`))
    );
  }

  addAlert (alert: Alert): Observable<Alert> {
    return this.http.post<Alert>(this.alertsUrl, alert, httpOptions).pipe(
      tap((alert: Alert) => this.log(`added alert with id=${alert.id}`)),
      catchError(this.handleError<Alert>(`addAlert`))
    );
  }

  deleteAlert (alert: Alert | number): Observable<Alert> {
    const id = typeof alert === 'number' ? alert : alert.id;
    const url = `${this.alertsUrl}/${id}`;

    return this.http.delete<Alert>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted alert id=${id}`)),
      catchError(this.handleError<Alert>(`deleteAlert`))
    );
  }

  private log(message: string) {
    this.messageService.add('Alert Message sent: ' + message);
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

}
