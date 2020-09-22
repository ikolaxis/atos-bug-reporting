import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BugsListComponent } from './bugs-list/bugs-list.component';
import { BugRoutingModule } from './bug-routing.module';

@NgModule({
  declarations: [BugsListComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    BugRoutingModule
  ]
})
export class BugModule { }
