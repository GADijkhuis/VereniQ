import { Component, OnInit } from '@angular/core';
import {IonIcon, IonSegment, IonSegmentButton, IonTabBar, IonTabButton, IonTabs} from "@ionic/angular/standalone";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  imports: [
    IonTabs,
    IonTabBar,
    IonTabButton,
    IonIcon,
    IonSegment,
    IonSegmentButton
  ]
})
export class MainComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
