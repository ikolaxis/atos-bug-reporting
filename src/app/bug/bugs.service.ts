import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BugModel } from './bug.model';
import { Observable } from 'rxjs';
import { SortingModel } from '../shared/sorting/sorting.model';
import { BugRoutingModule } from './bug-routing.module';


@Injectable({
  providedIn: 'root'
})
export class BugsService {

  private endpoint = 'https://bug-report-system-server.herokuapp.com/bugs';

  constructor(private http: HttpClient) { }

  getBugs(): Observable<BugModel[]> {
    return this.http.get<BugModel[]>(this.endpoint);
  }

  getBugsSorted(bugs: SortingModel): Observable<BugModel[]> {

    const ascendingStr = bugs.isAscending ? 'asc' : 'desc';
    const params = new HttpParams().append('sort', bugs.property + ',' + ascendingStr);
    console.log('with params: ');
    console.log(params);
    // sort=createdAt,asc
    return this.http.get<BugModel[]>(this.endpoint, {params});
  }

  saveBug(bug: BugModel): Observable<BugModel> {
    return this.http.post<BugModel>(this.endpoint, bug);
  }

  getBugByid(bugId: string): Observable<BugModel> {
    return this.http.get<BugModel>(this.endpoint + '/' + bugId);
  }

  editBug(bugId: string, bug: BugModel): Observable<BugModel> {
    return this.http.put<BugModel>(this.endpoint + '/' + bugId, bug);
  }
}
