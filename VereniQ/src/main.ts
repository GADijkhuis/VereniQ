import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';

import { addIcons } from 'ionicons';
import {peopleOutline, chevronForward, addOutline, calendarOutline, locationOutline, earthOutline, callOutline, addCircleOutline} from 'ionicons/icons';

addIcons({ peopleOutline, chevronForward, addOutline, calendarOutline, locationOutline, earthOutline, callOutline, addCircleOutline });

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular({mode: "ios"}),
    provideRouter(routes, withPreloading(PreloadAllModules)),
  ],
});
