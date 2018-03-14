import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';
import { ToastService } from './../common/toast.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from '.';

@Component({
    templateUrl: '/app/events/events-list.component.html'
})
export class EventListCompoment implements OnInit {

    events:IEvent;

    constructor(
        private _eventService: EventService, 
        private _toastr: ToastService, 
        private _route: ActivatedRoute) {   
    }

    ngOnInit() {
        this.events = this._route.snapshot.data['events'];
    }

    handleThumbnailClick(eventName): void {
        this._toastr.success(eventName);
    }
}