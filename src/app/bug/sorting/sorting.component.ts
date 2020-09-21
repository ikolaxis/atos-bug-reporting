import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SortingModel } from './sorting.model';

@Component({
  selector: 'atos-sorting',
  templateUrl: './sorting.component.html',
  styleUrls: ['./sorting.component.scss']
})
export class SortingComponent implements OnInit {
  isAscending: boolean = true;
  @Input() property: String;
  @Output() clickedEvent = new EventEmitter<SortingModel>();

  constructor() { }

  ngOnInit(): void {
  }

  clicked() {
    this.clickedEvent.emit({property: this.property, isAscending: this.isAscending});
    this.isAscending = !this.isAscending;
  }
}
