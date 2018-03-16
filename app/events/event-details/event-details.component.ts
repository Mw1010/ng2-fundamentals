import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent, ISession } from '..';

@Component({
    templateUrl: '/app/events/event-details/event-details.component.html',
    styles: [
        `
        .container {padding-left: 20px; padding-right: 20px; }
        .event-image {height: 100px; }
        a { cursor: pointer; }
        `
    ]
    // styleUrls: ['/app/events/event-details/event-details.component.css']
})
export class EventDetailComponent implements OnInit {

    event:IEvent;
    addMode: boolean;
    filterBy: string = 'all';
    sortBy: string = 'votes';

    constructor(private _eventService: EventService, private route: ActivatedRoute) {}

    ngOnInit() {
        this.event = this._eventService.getEvent(+this.route.snapshot.params['id']);
    }

    addSession(){
        this.addMode = true;
    }

    saveNewSession(session: ISession) {
        const nexId = Math.max.apply(null, this.event.sessions.map(s => s.id));
        session.id = nexId + 1;
        this.event.sessions.push(session);
        this._eventService.updateEvent(this.event);
        this.addMode = false;
    }

    cancelAddSession() {
        this.addMode = false;
    }
}