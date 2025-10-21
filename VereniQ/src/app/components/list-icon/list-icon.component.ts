import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-list-icon',
  templateUrl: './list-icon.component.html',
  styleUrls: ['./list-icon.component.scss'],
})
export class ListIconComponent  implements OnInit {
  @Input() color!: string;

  constructor() { }

  ngOnInit() {}

}
