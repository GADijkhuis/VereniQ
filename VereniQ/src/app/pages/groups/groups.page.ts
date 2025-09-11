import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import {ContainerComponent} from "../../components/container/container.component";
import {ButtonCardComponent} from "../../components/button-card/button-card.component";
import {ButtonCardTextComponent} from "../../components/button-card-text/button-card-text.component";

@Component({
  selector: 'app-groups',
  templateUrl: './groups.page.html',
  styleUrls: ['./groups.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, ContainerComponent, ButtonCardComponent, ButtonCardTextComponent]
})
export class GroupsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
