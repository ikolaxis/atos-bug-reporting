import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BugsListComponent } from './bugs-list/bugs-list.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from '../shared/shared.module';
import { BugsCreationComponent } from './bugs-creation/bugs-creation.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [BugsListComponent, BugsCreationComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule,
    ReactiveFormsModule
  ],
  exports: [
    BugsListComponent
  ],
  bootstrap: [BugsListComponent]
})
export class BugModule { }
