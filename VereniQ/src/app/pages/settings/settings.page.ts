import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonTitle,
  IonToggle,
  IonToolbar
} from '@ionic/angular/standalone';
import {ContainerComponent} from "../../components/container/container.component";
import {MatIcon} from "@angular/material/icon";
import {ListIconSmallComponent} from "../../components/list-icon-small/list-icon-small.component";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, ContainerComponent, IonItem, IonList, IonLabel, MatIcon, ListIconSmallComponent, IonToggle]
})
export class SettingsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
