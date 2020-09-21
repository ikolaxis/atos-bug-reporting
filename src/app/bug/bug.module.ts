import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BugsListComponent } from './bugs-list/bugs-list.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { SortingComponent } from './sorting/sorting.component';



@NgModule({
  declarations: [BugsListComponent, SortingComponent],
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
