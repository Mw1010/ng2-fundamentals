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
    CreateSessionComponent
} from './events/index';

import { EventAppComponent } from './event-app.component';
import { NavBarComponent } from './nav/navbar.component';

import { ToastService } from './common/toast.service';
import { appRoutes } from './routes';
import { Error404Component } from './errors/404.component';
import { AuthService } from './user/auth.service';

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
    ],
    bootstrap: [
        EventAppComponent
    ],
    providers: [
        EventService,
        ToastService,
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