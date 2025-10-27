import {Component, OnInit} from "@angular/core";
import {IonButton, IonContent, IonHeader, IonTitle, IonToolbar} from "@ionic/angular/standalone";
import {ContainerComponent} from "../../../components/container/container.component";
import {
  EmailConfirmationAnimationComponent
} from "../../../components/email-confirmation-animation/email-confirmation-animation.component";

@Component({
  selector: 'app-create-profile',
  templateUrl: './confirm-email.page.html',
  styleUrls: ['./confirm-email.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonTitle,
    IonToolbar,
    IonContent,
    ContainerComponent,
    IonButton,
    EmailConfirmationAnimationComponent
  ]
})

export class ConfirmEmailPage implements OnInit {
  ngOnInit() {

  }
}
