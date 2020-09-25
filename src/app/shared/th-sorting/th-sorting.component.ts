import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SortingModel } from './sorting.model';

@Component({
  selector: 'atos-th-sorting',
  templateUrl: './th-sorting.component.html',
  styleUrls: ['./th-sorting.component.scss']
})
export class ThSortingComponent implements OnInit {
  isAscending: boolean = true;
  @Input() property: String;
  @Input() propertyName: String;
  @Output() clickedEvent = new EventEmitter<SortingModel>();

  constructor() { }

  ngOnInit(): void {
  }

  clicked() {
    this.clickedEvent.emit({property: this.property, isAscending: this.isAscending});
    this.isAscending = !this.isAscending;
  }
}
