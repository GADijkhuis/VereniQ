import { Component } from '@angular/core';
import {IonHeader, IonToolbar, IonTitle, IonContent, IonInput, IonButton} from '@ionic/angular/standalone';

@Component({
  selector: 'app-start',
  templateUrl: 'start.page.html',
  styleUrls: ['start.page.scss'],
  imports: [IonContent, IonButton],
})
export class StartPage {
  constructor() {}
}
