import { Component } from '@angular/core';
import {IonHeader, IonToolbar, IonTitle, IonContent, IonInput, IonButton} from '@ionic/angular/standalone';
import {ContainerComponent} from "../../components/container/container.component";

@Component({
  selector: 'app-start',
  templateUrl: 'start.page.html',
  styleUrls: ['start.page.scss'],
  imports: [IonContent, IonButton, ContainerComponent],
})
export class StartPage {
  constructor() {}
}
