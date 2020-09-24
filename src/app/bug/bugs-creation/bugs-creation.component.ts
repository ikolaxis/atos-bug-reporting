import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BugsService } from '../bugs.service';

@Component({
  selector: 'atos-bugs-creation',
  templateUrl: './bugs-creation.component.html',
  styleUrls: ['./bugs-creation.component.scss']
})
export class BugsCreationComponent implements OnInit {

  myForm: FormGroup;

  constructor(private bugsService: BugsService, private router: Router) { }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      title: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
      priority: new FormControl(null, Validators.required),
      reporter: new FormControl(null, Validators.required),
      status: new FormControl(null, Validators.required)
    });
  }

  onClickSaveBug(): void {
    this.bugsService.saveBug(this.myForm.value).subscribe(() => this.router.navigate(['/bugs']));
  }
}
