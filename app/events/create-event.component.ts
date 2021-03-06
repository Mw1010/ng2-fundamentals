import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from './shared/index';

@Component({
    templateUrl: 'app/events/create-events.component.html',
    styles: [`
    em { 
      float: right;
      color: #E05C65;
      padding-left: 10px;
    }
    .error input { background-color: #E3C3C5; }
    .error ::-webkit-input-placeholder { color: #999; }
    .error ::-moz-placeholder { color: #999; }
    .error :-mozt-placeholder { color: #999; }
    .error :ms-input-placeholder { color: #999; }
  `]
})
export class CreateEventComponent {
    isDirty = true;

    constructor(private router: Router, private _eventService: EventService) {}

    cancel() {
        this.router.navigate(['/events']);
    }

    saveEvent(formValues) {
        this._eventService.saveEvent(formValues);
        this.isDirty = false;
        this.router.navigate(['/events']);
    }
}