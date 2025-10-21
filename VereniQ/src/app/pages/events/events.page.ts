import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {IonContent, IonHeader, IonItem, IonLabel, IonList, IonTitle, IonToolbar} from '@ionic/angular/standalone';
import {ContainerComponent} from "../../components/container/container.component";
import {ButtonCardComponent} from "../../components/button-card/button-card.component";
import {ButtonCardTextComponent} from "../../components/button-card-text/button-card-text.component";
import {ListIconComponent} from "../../components/list-icon/list-icon.component";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, ContainerComponent, ButtonCardComponent, ButtonCardTextComponent, IonList, IonItem, IonLabel, ListIconComponent, MatIcon]
})
export class EventsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
