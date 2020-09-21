import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BugsListComponent } from '../bug/bugs-list/bugs-list.component';
import { BugsListResolver } from '../bug/bugs-list.resolver';

/* const routes: Routes = [
  {path:"bugs", component: BugsListComponent, resolve: {bugs: BugsListResolver}}
] */

@NgModule({
  declarations: [],
  imports: [
    CommonModule/* , RouterModule.forChild(routes) */
  ], 
  exports: [
    RouterModule
  ]
})
export class BugRoutingModule { }
