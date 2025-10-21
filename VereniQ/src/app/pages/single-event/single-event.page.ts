import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {IonAlert, IonButton, IonContent, IonHeader, IonTitle, IonToolbar} from '@ionic/angular/standalone';
import {ContainerComponent} from "../../components/container/container.component";
import {TextIconComponent} from "../../components/text-icon/text-icon.component";

@Component({
  selector: 'app-single-event',
  templateUrl: './single-event.page.html',
  styleUrls: ['./single-event.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, ContainerComponent, TextIconComponent, IonButton, IonAlert]
})
export class SingleEventPage implements OnInit {

  alertButtons = ['Absent', 'Present'];


  constructor() { }

  ngOnInit() {
  }

}
