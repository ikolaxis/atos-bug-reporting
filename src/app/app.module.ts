import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BugsListResolver } from './bug/bugs-list.resolver';
import { BugModule } from './bug/bug.module';
import { BugRoutingModule } from './bug/bug-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, 
    BugRoutingModule,
    HttpClientModule,
    BugModule,
    RouterModule.forRoot([{
      path: '', redirectTo: 'bugs', pathMatch: 'full'
    }])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
