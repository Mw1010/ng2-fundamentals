import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { IEvent, ISession } from '..';
import { EventService } from '../shared/event.service';

@Component({
    moduleId: module.id,
    templateUrl: 'event-details.component.html',
    styles: [
        `
        .container {padding-left: 20px; padding-right: 20px; }
        .event-image {height: 100px; }
        a { cursor: pointer; }
        `,
    ],
})
export class EventDetailComponent implements OnInit {

    event: IEvent;
    addMode: boolean;
    filterBy: string = 'all';
    sortBy: string = 'votes';

    constructor(private _eventService: EventService, private _route: ActivatedRoute) {}

    ngOnInit() {
        this._route.data.forEach((data) => {
            this.event = data.event;
            this.addMode = false;
        });
    }

    addSession() {
        this.addMode = true;
    }

    saveNewSession(session: ISession) {
        const nexId = Math.max.apply(null, this.event.sessions.map((s) => s.id));
        session.id = nexId + 1;
        this.event.sessions.push(session);
        this._eventService.saveEvent(this.event).subscribe();
        this.addMode = false;
    }

    cancelAddSession() {
        this.addMode = false;
    }
}
