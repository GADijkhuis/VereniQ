import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader, IonItem, IonLabel, IonList, IonListHeader,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import {ContainerComponent} from "../../components/container/container.component";
import {ListIconComponent} from "../../components/list-icon/list-icon.component";
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.page.html',
  styleUrls: ['./groups.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, ContainerComponent, IonList, IonLabel, IonItem, ListIconComponent, MatIcon, IonListHeader]
})
export class GroupsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
