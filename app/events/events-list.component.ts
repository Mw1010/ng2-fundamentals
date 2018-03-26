import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from '.';
import { EventService } from './shared/event.service';

@Component({
    moduleId: module.id,
    templateUrl: 'events-list.component.html',
})
export class EventListCompoment implements OnInit {

    events: IEvent;

    constructor(
        private _eventService: EventService,
        private _route: ActivatedRoute) {
    }

    ngOnInit() {
        this.events = this._route.snapshot.data.events;
    }
}
