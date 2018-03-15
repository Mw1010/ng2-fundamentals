import { Component, Input } from "@angular/core";
import { ISession } from "..";

@Component({
    selector: 'session-list',

    templateUrl: 'app/events/event-details/session-list.component.html'
})
export class SessionListComponent {
    @Input() sessions:ISession[]
}