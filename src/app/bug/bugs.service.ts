import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BugModel } from './bug.model';
import { Observable } from 'rxjs';
import { SortingModel } from './sorting/sorting.model';


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
    var paramStr = "?sort=" + data.property + "," + ascendingStr;
    // sort=createdAt,asc
    return this.http.get<BugModel[]>(this.endpoint + paramStr);
  }
}
