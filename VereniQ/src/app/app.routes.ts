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
    path: 'create-profile',
    loadComponent: () => import('./pages/profile/create-profile/create-profile.page').then( m => m.CreateProfilePage)
  },
  {
    path: 'auth',
    children: [
      {
        path: 'signup',
        loadComponent: () => import('./pages/auth/signup/signup.page').then( m => m.SignupPage)
      },
      {
        path: 'signin',
        loadComponent: () => import('./pages/auth/signin/signin.page').then( m => m.SigninPage)
      },
      {
        path: 'email-confirm',
        loadComponent: () => import('./pages/auth/confirm-email/confirm-email.page').then( m => m.ConfirmEmailPage)
      }
    ]
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
  {
    path: 'signup',
    loadComponent: () => import('./pages/auth/signup/signup.page').then( m => m.SignupPage)
  },
  {
    path: 'signin',
    loadComponent: () => import('./pages/auth/signin/signin.page').then( m => m.SigninPage)
  },
];
