import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from '..';

@Component({
    templateUrl: '/app/events/event-details/event-details.component.html',
    styles: [
        `
        .container {
            padding-left: 20px;
            padding-right: 20px;
        }
        
        .event-image {
            height: 100px;
        }
        `
    ]
    // styleUrls: ['/app/events/event-details/event-details.component.css']
})
export class EventDetailComponent implements OnInit {

    event:IEvent;

    constructor(private _eventService: EventService, private route: ActivatedRoute) {}

    ngOnInit() {
        this.event = this._eventService.getEvent(+this.route.snapshot.params['id']);
    }
}