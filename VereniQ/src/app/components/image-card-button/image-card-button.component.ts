import {Component, Input, OnInit} from '@angular/core';
import {IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonIcon} from "@ionic/angular/standalone";

@Component({
  selector: 'app-image-card-button',
  templateUrl: './image-card-button.component.html',
  styleUrls: ['./image-card-button.component.scss'],
  imports: [
    IonCard,
    IonCardContent,
    IonButton,
    IonCardHeader,
    IonCardTitle,
    IonIcon
  ]
})
export class ImageCardButtonComponent  implements OnInit {

  constructor() { }

  @Input() buttonUrl = '';
  @Input() title = '';
  @Input() description = '';
  @Input() iconName = 'people-outline';
  @Input() imageUrl? = null;
  ngOnInit() {}

}
