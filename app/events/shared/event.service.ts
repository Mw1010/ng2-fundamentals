import { EventEmitter, Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { IEvent, ISession } from './event.model';

@Injectable()
export class EventService {

  constructor(private _http: Http) {}

  getEvents(): Observable<IEvent[]> {
    return this._http.get('/api/events').map((response: Response) => {
      return <IEvent[]> response.json();
    }).catch(this.handleError);
  }
  getEvent(id: number): Observable<IEvent> {
    return this._http.get('/api/events/' + id).map((response: Response) => {
      return <IEvent> response.json();
    }).catch(this.handleError);
  }

  saveEvent(event): Observable<IEvent> {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers});

    return this._http.post('/api/events', JSON.stringify(event), options)
    .map((respose: Response) => {
      return respose.json();
    }).catch(this.handleError);
  }

  // updateEvent(event) {
  //   let index = EVENTS.findIndex(x => x.id = event.id);
  //   EVENTS[index] = event;
  // }

  searchSessions(searchTerm: string) {
    return this._http.get('/api/sessions/search?search=' + searchTerm).map((response: Response) => {
      return response.json();
    }).catch(this.handleError);
  }

  private handleError(error: Response) {
    return Observable.throw(error.statusText);
  }
}
