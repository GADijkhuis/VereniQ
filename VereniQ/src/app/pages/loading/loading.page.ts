import {Component, OnInit} from '@angular/core';
import {IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonSpinner} from '@ionic/angular/standalone';
import {ContainerComponent} from "../../components/container/container.component";
import {Supabase} from "../../supabase";
import {Router} from "@angular/router";

@Component({
  selector: 'app-loading',
  templateUrl: 'loading.page.html',
  styleUrls: ['loading.page.scss'],
  imports: [IonContent, IonSpinner, ContainerComponent],
})
export class LoadingPage implements OnInit {


  constructor(private router: Router) {}

  ngOnInit() {
    const user = new Supabase().getSession()?.user;

    if (user) {
      this.router.navigate(['/main']);
    } else {
      this.router.navigate(['/start']);
    }
  }
}
