import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BugModel } from '../bug.model';

@Component({
  selector: 'atos-bugs-list',
  templateUrl: './bugs-list.component.html',
  styleUrls: ['./bugs-list.component.scss']
})
export class BugsListComponent implements OnInit {

  bugs: BugModel[];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.bugs = this.route.snapshot.data.bugs;
  }

  onClickSortByHeader(event?: MouseEvent): void {
    const eventTarget = event ? (event.target as HTMLElement).textContent : '';
    console.log("Clicked on " + eventTarget);
  }

}
