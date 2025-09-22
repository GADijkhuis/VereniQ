import { Component } from '@angular/core';
import {IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonSpinner} from '@ionic/angular/standalone';
import {ContainerComponent} from "../../components/container/container.component";

@Component({
  selector: 'app-loading',
  templateUrl: 'loading.page.html',
  styleUrls: ['loading.page.scss'],
  imports: [IonContent, IonSpinner, ContainerComponent],
})
export class LoadingPage {
  constructor() {}
}
