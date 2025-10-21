import {Component, Input, OnInit} from '@angular/core';
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-button-card-text',
  templateUrl: './button-card-text.component.html',
  styleUrls: ['./button-card-text.component.scss'],
  standalone: true,
  imports: [
  ]
})
export class ButtonCardTextComponent  implements OnInit {

  @Input() title!: string;
  @Input() subtitle?: string;

  constructor() { }

  ngOnInit() {}

}
