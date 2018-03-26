import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { EventService } from './shared/event.service';

@Injectable()
export class EventResolver implements Resolve<any> {

    constructor(private _eventService: EventService) {}

    resolve(route: ActivatedRouteSnapshot) {
        return this._eventService.getEvent(route.params.id);

    }
}
