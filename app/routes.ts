import { Routes } from '@angular/router';

import {
    CreateEventComponent,
    CreateSessionComponent,
    EventDetailComponent,
    EventListCompoment,
    EventResolver,
    EventsListResolver,
} from './events/index';

import { Error404Component } from './errors/404.component';
import { userRoutes } from './user/user.routes';

export const appRoutes: Routes = [
    { path: 'events/new', component: CreateEventComponent,
    canDeactivate: ['canDeactivateCreateEvent'] },
    { path: 'events', component: EventListCompoment,
    resolve: {events: EventsListResolver} },
    { path: 'events/:id', component: EventDetailComponent,
    resolve: {event: EventResolver}},
    { path: 'events/session/new', component: CreateSessionComponent },
    { path: '404', component: Error404Component },
    { path: '', redirectTo: '/events', pathMatch: 'full' },
    {
        path: 'user',
        children: userRoutes,
        // loadChildren: 'app/user/user.module#UserModule'
    },
];
