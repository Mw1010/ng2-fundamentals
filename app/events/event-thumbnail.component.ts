import { Component, Input } from '@angular/core';
import { IEvent } from '.';

@Component({
    selector: 'event-thumbnail',
    templateUrl: '/app/events/event-thumbnail.component.html',
    styleUrls: ['/app/events/event-thumbnail.component.css'],
})
export class EventThumbnailComponent {
    @Input() inputEvent: IEvent;

    getStartTimeStyle():any {
        if (this.inputEvent && this.inputEvent.time === '8:00 am') {
            return {color: '#3FFF36', 'font-weight': 'bold'};
        }
        return {};
    }
}