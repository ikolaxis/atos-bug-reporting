import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { BugModel } from './bug.model';
import { Observable, of } from 'rxjs';
import { BugsService } from './bugs.service';

@Injectable({
  providedIn: 'root'
})
export class BugsListResolver implements Resolve<BugModel[]>{

  constructor(private bugsService: BugsService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<BugModel[]> {
    return this.bugsService.getBugs();
  }
}
