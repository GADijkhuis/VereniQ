import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-list-icon-small',
  templateUrl: './list-icon-small.component.html',
  styleUrls: ['./list-icon-small.component.scss'],
})
export class ListIconSmallComponent implements OnInit {
  @Input() color!: string;

  constructor() { }

  ngOnInit() {}

}
