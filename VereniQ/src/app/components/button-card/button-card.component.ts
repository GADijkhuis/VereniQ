import {Component, Input} from '@angular/core';
import {IonCard, IonCardContent, IonCol, IonGrid, IonIcon, IonRow, IonText} from "@ionic/angular/standalone";

@Component({
  selector: 'app-button-card',
  templateUrl: './button-card.component.html',
  styleUrls: ['./button-card.component.scss'],
  standalone: true,
  imports: [
    IonCard,
    IonCardContent,
    IonCol,
    IonGrid,
    IonRow,
    IonIcon,
    IonText,
  ]
})
export class ButtonCardComponent{
  @Input() buttonUrl = '';
  @Input() iconName = 'people-outline';
  @Input() showChevron = true;
}
