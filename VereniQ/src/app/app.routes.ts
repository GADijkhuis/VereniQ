import { Routes } from '@angular/router';
import {main} from "@angular/compiler-cli/src/main";
import {MainComponent} from "./components/main/main.component";

export const routes: Routes = [
  {
    path: 'loading',
    loadComponent: () => import('./pages/loading/loading.page').then((m) => m.LoadingPage),
  },
  {
    path: 'start',
    loadComponent: () => import('./pages/start/start.page').then((m) => m.StartPage),
  },
  {
    path: 'main',
    component: MainComponent,
    children: [
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
      {
        path: 'messages',
        loadComponent: () => import('./pages/messages/messages.page').then( m => m.MessagesPage)
      },
      {
        path: 'settings',
        loadComponent: () => import('./pages/settings/settings.page').then( m => m.SettingsPage)
      },
      {
        path: '',
        redirectTo: '/main/groups',
        pathMatch: 'full',
      },
    ]
  },
  {
    path: 'single-message',
    loadComponent: () => import('./pages/single-message/single-message.page').then( m => m.SingleMessagePage)
  },
  {
    path: '',
    redirectTo: 'loading',
    pathMatch: 'full',
  },
];
