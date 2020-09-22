import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BugsListComponent } from './bugs-list/bugs-list.component';
import { BugResolver } from './bug.resolver';
import { Router, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'bugs',
    component: BugsListComponent,
    resolve: {
      bugs: BugResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BugRoutingModule { }
