import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { 
    EventListCompoment, 
    EventThumbnailComponent, 
    EventService, EventDetailComponent, 
    CreateEventComponent, 
    EventRouterActivator, 
    EventsListResolver, 
    CreateSessionComponent,
    SessionListComponent,
    DurationPipe
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

declare let toastr: Toastr;
declare let jQuery: Object;

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
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
        ModalTriggerDirective,
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
        EventRouterActivator,
        EventsListResolver,
        {
            provide: 'canDeactivateCreateEvent',
            useValue: checkDirtyState
        },
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