import { Component } from '@angular/core';
import {IonHeader, IonToolbar, IonTitle, IonContent, IonInput, IonButton} from '@ionic/angular/standalone';
import {ContainerComponent} from "../../components/container/container.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-start',
  templateUrl: 'start.page.html',
  styleUrls: ['start.page.scss'],
  imports: [IonContent, IonButton, ContainerComponent],
})
export class StartPage {
  constructor(private router: Router) {}

  signUp() {
    this.router.navigate(['/auth/signup']);
  }

  signIn() {
    this.router.navigate(['/auth/signin']);
  }
}
