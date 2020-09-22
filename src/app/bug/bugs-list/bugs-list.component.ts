import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BugModel } from '../bug.model';

@Component({
  selector: 'atos-bugs-list',
  templateUrl: './bugs-list.component.html',
  styleUrls: ['./bugs-list.component.scss']
})
export class BugsListComponent implements OnInit {

  sortByHeader: string;
  sortOrder: string;

  bugs: BugModel[];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.sortByHeader = "title";
    this.sortOrder = "desc";

    this.bugs = this.route.snapshot.data.bugs;
  }

  onClickSortByHeader(event?: MouseEvent): void {
    // Which table header did we click on?
    const tableHeaderClicked = event ? (event.target as HTMLElement).textContent : '';

    this.sortByHeader = tableHeaderClicked;

    // If we clicked on the same table header as the one currently used for sorting,
    // then we need to toggle the order, e.g. from "desc" to "asc" and vice versa.
    this.sortOrder = (this.sortByHeader === tableHeaderClicked) ? this.toggleSortOrder(this.sortOrder) : 'desc';

    console.log("Sort by: " + this.sortByHeader + ", Order: " + this.sortOrder);
  }

  toggleSortOrder(sortOrder: string): string {
    let inverseSortOrder = 'desc';

    switch (sortOrder) {
      case 'desc':
        inverseSortOrder = 'asc';
        break;
      case 'asc':
        inverseSortOrder = 'desc';
        break;
      default:
        console.log("Sort order is undefined. Using a descending order as default.");
        break;
    }

    return inverseSortOrder;
  }

}
