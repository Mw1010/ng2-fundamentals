import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import './rxjs.extensions';

import {
    CreateEventComponent,
    CreateSessionComponent,
    DurationPipe, EventDetailComponent,
    EventListCompoment,
    EventResolver,
    EventService,
    EventsListResolver,
    EventThumbnailComponent,
    LocationValidator,
    SessionListComponent,
    UpvoteComponent,
} from './events/index';

import { EventAppComponent } from './event-app.component';
import { NavBarComponent } from './nav/navbar.component';

import {
    CollapsibleWellComponent,
    IToastr,
    JQ_TOKEN,
    SimpleModalComponent,
    TOASTR_TOKEN,
 } from './common/index';

import { ModalTriggerDirective } from './common/modal-trigger.directive';
import { Error404Component } from './errors/404.component';
import { VoterService } from './events/event-details/voter.service';
import { appRoutes } from './routes';
import { AuthService } from './user/auth.service';

let toastr: IToastr = window['toastr'];
let jQuery: Object = window['$'];

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        ReactiveFormsModule,
        RouterModule.forRoot(appRoutes),
    ],
    declarations: [
        EventAppComponent,
        EventListCompoment,
        EventThumbnailComponent,
        EventDetailComponent,
        CreateEventComponent,
        NavBarComponent,
        Error404Component,
        CreateSessionComponent,
        SessionListComponent,
        CollapsibleWellComponent,
        SimpleModalComponent,
        UpvoteComponent,
        ModalTriggerDirective,
        LocationValidator,
        DurationPipe,
    ],
    bootstrap: [
        EventAppComponent,
    ],
    providers: [
        EventService,
        {
            provide: TOASTR_TOKEN,
            useValue: toastr,
        },
        {
            provide: JQ_TOKEN,
            useValue: jQuery,
        },
        EventResolver,
        EventsListResolver,
        {
            provide: 'canDeactivateCreateEvent',
            useValue: checkDirtyState,
        },
        VoterService,
        AuthService,
    ],

})

export class AppModule {}

function checkDirtyState(component: CreateEventComponent) {
    if (component.isDirty) {
        return window.confirm('You have not saved this event, do you really want to cancel?');
    }
    return true;
}
