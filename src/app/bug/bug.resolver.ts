import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { BugModel } from './bug.model';
import { BugsService } from './bugs.service';

@Injectable({
  providedIn: 'root'
})
export class BugResolver implements Resolve<BugModel[]> {

  constructor(private bugService: BugsService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<BugModel[]> {
    return this.bugService.getBugs();
  }
}
