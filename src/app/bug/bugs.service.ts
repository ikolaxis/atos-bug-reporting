import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BugModel } from './bug.model';
import { Observable } from 'rxjs';
import { SortingModel } from '../shared/sorting/sorting.model';


@Injectable({
  providedIn: 'root'
})
export class BugsService {

  private endpoint = "https://bug-report-system-server.herokuapp.com/bugs";

  constructor(private http: HttpClient) { }

  getBugs(): Observable<BugModel[]> {
    return this.http.get<BugModel[]>(this.endpoint);
  }

  getBugsSorted(data: SortingModel): Observable<BugModel[]> {
    
    var ascendingStr = data.isAscending ? "asc" : "desc";
    const params = new HttpParams().append('sort', data.property + ',' + ascendingStr);
    console.log("with params: ");
    console.log(params);
    // sort=createdAt,asc
    return this.http.get<BugModel[]>(this.endpoint, {params});
  }
}
