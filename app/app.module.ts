import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { 
    EventListCompoment, 
    EventThumbnailComponent, 
    EventService, EventDetailComponent, 
    CreateEventComponent, 
    EventsListResolver, 
    CreateSessionComponent,
    SessionListComponent,
    DurationPipe,
    UpvoteComponent,
    LocationValidator,
    EventResolver,
} from './events/index';

import { EventAppComponent } from './event-app.component';
import { NavBarComponent } from './nav/navbar.component';

import { 
    TOASTR_TOKEN,
    Toastr,
    CollapsibleWellComponent,
    SimpleModalComponent,
    JQ_TOKEN,
 } from './common/index';
 
import { appRoutes } from './routes';
import { Error404Component } from './errors/404.component';
import { AuthService } from './user/auth.service';
import { ModalTriggerDirective } from './common/modal-trigger.directive';
import { VoterService } from './events/event-details/voter.service';

declare let toastr: Toastr;
declare let jQuery: Object;

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        ReactiveFormsModule,
        RouterModule.forRoot(appRoutes)
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
        EventAppComponent
    ],
    providers: [
        EventService,
        {
            provide: TOASTR_TOKEN,
            useValue: toastr
        },
        {
            provide: JQ_TOKEN,
            useValue: jQuery
        },
        EventResolver,
        EventsListResolver,
        {
            provide: 'canDeactivateCreateEvent',
            useValue: checkDirtyState
        },
        VoterService,
        AuthService
    ]

})

export class AppModule {}

function checkDirtyState(component: CreateEventComponent) {
    if (component.isDirty) {
        return window.confirm('You have not saved this event, do you really want to cancel?');
    }
    return true;
}