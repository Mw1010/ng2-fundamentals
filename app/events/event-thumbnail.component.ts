import { Component, Input } from '@angular/core';
import { IEvent } from '.';

@Component({
    moduleId: module.id,
    selector: 'event-thumbnail',
    templateUrl: 'event-thumbnail.component.html',
    styleUrls: ['event-thumbnail.component.css'],
})
export class EventThumbnailComponent {
    @Input() inputEvent: IEvent;

    getStartTimeStyle(): any {
        if (this.inputEvent && this.inputEvent.time === '8:00 am') {
            return {'color': '#3FFF36', 'font-weight': 'bold'};
        }
        return {};
    }
}
