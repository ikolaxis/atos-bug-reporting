import { Component, OnInit, ɵCompiler_compileModuleSync__POST_R3__ } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BugModel } from '../bug.model';
import { BugsService } from '../bugs.service';
import { SortingModel } from '../sorting/sorting.model';

@Component({
  selector: 'atos-bugs-list',
  templateUrl: './bugs-list.component.html',
  styleUrls: ['./bugs-list.component.scss']
})
export class BugsListComponent implements OnInit {

  bugs: BugModel[];

  constructor(private bugsService: BugsService) { }

  ngOnInit(): void {
    this.bugsService.getBugs().subscribe(data => {
      this.bugs = data;
    });
  }

  clickedEvent(event: SortingModel) {
    this.bugsService.getBugsSorted(event).subscribe(data => {
      this.bugs = data;
    });
  }

}
