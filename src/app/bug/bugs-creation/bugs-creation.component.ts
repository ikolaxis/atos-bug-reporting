import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BugsService } from '../bugs.service';

@Component({
  selector: 'atos-bugs-creation',
  templateUrl: './bugs-creation.component.html',
  styleUrls: ['./bugs-creation.component.scss']
})
export class BugsCreationComponent implements OnInit {

  myForm: FormGroup;
  commentsFormArray: FormArray;
  bugId: string;

  constructor(private fb: FormBuilder, private bugsService: BugsService, private router: Router, private route: ActivatedRoute) { 
    this.bugId = this.route.snapshot.queryParams.id;
  }

  ngOnInit(): void {

    this.commentsFormArray = this.fb.array([]);

    this.myForm = this.fb.group({
      title: [null, [Validators.required]],
      description: [null, [Validators.required]],
      priority: [null, [Validators.required]],
      reporter: [null, [Validators.required]],
      status: [null, [Validators.required]],
      comments: this.commentsFormArray
    });

    if(this.bugId){
      this.bugsService.getBugByid(this.bugId).subscribe((bug) => 
        {
          this.myForm.patchValue(bug);
          bug.comments.forEach( (comment) => this.createCommentFields(comment.reporter, comment.description));
          console.log(bug.comments);
        }
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

  createCommentFields(reporter: string, description: string): void{
    
    this.commentsFormArray.push(this.fb.group({
      reporter: [reporter, [Validators.required]],
      description: [description, [Validators.required]]
    }))
  }

}
