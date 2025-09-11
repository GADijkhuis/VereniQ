import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'start',
    loadComponent: () => import('./pages/start/start.page').then((m) => m.StartPage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'groups',
    loadComponent: () => import('./pages/groups/groups.page').then( m => m.GroupsPage)
  },
  {
    path: 'events',
    loadComponent: () => import('./pages/events/events.page').then( m => m.EventsPage)
  },
  {
    path: 'single-event',
    loadComponent: () => import('./pages/single-event/single-event.page').then( m => m.SingleEventPage)
  },
];
