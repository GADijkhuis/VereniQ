import { Component } from '@angular/core';
import {IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonSpinner} from '@ionic/angular/standalone';
import {ContainerComponent} from "../../components/container/container.component";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonContent, IonSpinner, ContainerComponent],
})
export class HomePage {
  constructor() {}
}
