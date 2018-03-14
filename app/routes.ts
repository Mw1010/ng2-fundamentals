import { Routes } from '@angular/router';

import {
    EventListCompoment,
    EventDetailComponent,
    CreateEventComponent,
    EventRouterActivator,
    EventsListResolver,
    CreateSessionComponent
} from './events/index';

import { Error404Component } from './errors/404.component';

export const appRoutes:Routes = [
    { path: 'events/new', component: CreateEventComponent, 
    canDeactivate: ['canDeactivateCreateEvent'] },
    { path: 'events', component: EventListCompoment, 
    resolve: {events: EventsListResolver} },
    { path: 'events/:id', component: EventDetailComponent, 
    canActivate: [EventRouterActivator] },
    { path: 'events/session/new', component: CreateSessionComponent },
    { path: '404', component: Error404Component },
    { path: '', redirectTo: '/events', pathMatch: 'full' },
    { path: 'user', loadChildren: 'app/user/user.module#UserModule' },
]