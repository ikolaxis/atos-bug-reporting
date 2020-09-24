import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BugsService } from '../bugs.service';

@Component({
  selector: 'atos-bugs-creation',
  templateUrl: './bugs-creation.component.html',
  styleUrls: ['./bugs-creation.component.scss']
})
export class BugsCreationComponent implements OnInit {

  myForm: FormGroup;
  bugId: string;

  constructor(private bugsService: BugsService, private router: Router, private route: ActivatedRoute) { 
    this.bugId = this.route.snapshot.queryParams.id;
  }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      title: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
      priority: new FormControl(null, Validators.required),
      reporter: new FormControl(null, Validators.required),
      status: new FormControl(null, Validators.required)
    });

    if(this.bugId){
      this.bugsService.getBugByid(this.bugId).subscribe((bug) => 
        this.myForm.patchValue(bug)
      );
    }
  }

  onClickSaveBug(): void {
    if (!this.bugId){
      this.bugsService.saveBug(this.myForm.value).subscribe(() => this.router.navigate(['/bugs']));
    }
    else {
      this.bugsService.editBug(this.bugId, this.myForm.value).subscribe(() => this.router.navigate(['/bugs']));
    }
  }

}
