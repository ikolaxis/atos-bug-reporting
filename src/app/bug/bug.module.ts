import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BugsListComponent } from './bugs-list/bugs-list.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [BugsListComponent],
  imports: [
    CommonModule, 
    HttpClientModule
  ],
  exports: [
    BugsListComponent
  ],
  bootstrap: [BugsListComponent]
})
export class BugModule { }
