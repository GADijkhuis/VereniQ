import {Component, Input, OnInit} from '@angular/core';
import {IonIcon} from "@ionic/angular/standalone";

@Component({
  selector: 'app-text-icon',
  templateUrl: './text-icon.component.html',
  styleUrls: ['./text-icon.component.scss'],
  standalone: true,
  imports: [
    IonIcon
  ]
})
export class TextIconComponent  implements OnInit {
  @Input() icon?: string;

  constructor() { }

  ngOnInit() {}

}
