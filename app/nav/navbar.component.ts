import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/toPromise';
import { EventResolver, EventService, IEvent, ISession } from '../events/index';
import { AuthService } from '../user/auth.service';

@Component({
    moduleId: module.id,
    selector: 'nav-bar',
    templateUrl: 'navbar.component.html',
    styles: [`
        .nav.navbar-nav { font-size: 15px; }
        #searchForm { margin-right: 100px; }
        @media (max-width: 1200px) {#searchForm {display:none}}
        li > a.active { color: #F97924; }
    `],
})
export class NavBarComponent implements OnInit {
    searchTerm = '';
    foundSessions: ISession[];
    events: IEvent[];

    constructor(public _auth: AuthService,
                private _eventService: EventService,
                private _route: ActivatedRoute) {
    }

    ngOnInit() {
        this.events = this._route.snapshot.data.events;
        this.getEvents().then((result) => {
            this.events = result;
        });
    }

    searchSession(searchTerm) {
        this._eventService.searchSessions(searchTerm).subscribe(
            (sessions) => {
                this.foundSessions = sessions;
            },
        );
    }

    getEvents() {
        return this._eventService.getEvents().toPromise();
    }

}
