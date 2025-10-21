import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {IonCard, IonCardContent, IonContent, IonHeader, IonTitle, IonToolbar} from '@ionic/angular/standalone';
import {ContainerComponent} from "../../components/container/container.component";

@Component({
  selector: 'app-single-message',
  templateUrl: './single-message.page.html',
  styleUrls: ['./single-message.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, ContainerComponent, IonCard, IonCardContent]
})
export class SingleMessagePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
