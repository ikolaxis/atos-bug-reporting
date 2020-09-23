import { Component, OnInit, ɵCompiler_compileModuleSync__POST_R3__ } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SortingModel } from 'src/app/shared/sorting/sorting.model';
import { BugModel } from '../bug.model';
import { BugsService } from '../bugs.service';

@Component({
  selector: 'atos-bugs-list',
  templateUrl: './bugs-list.component.html',
  styleUrls: ['./bugs-list.component.scss']
})
export class BugsListComponent implements OnInit {

  bugs: BugModel[];

  constructor(private bugsService: BugsService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.bugs = this.route.snapshot.data.bugs;
  }

  clickedEvent(event: SortingModel) {
    console.log("Received click event with sorting model: " + event.property + ", " + event.isAscending);
    this.bugsService.getBugsSorted(event).subscribe(data => {
      this.bugs = data;
      console.log("Received bugs from server");
    });
  }
}
