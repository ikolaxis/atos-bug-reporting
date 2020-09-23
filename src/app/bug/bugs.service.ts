import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BugModel } from './bug.model';

@Injectable({
  providedIn: 'root'
})
export class BugsService {

  constructor(private http: HttpClient) { }

  getBugs(): Observable<BugModel[]> {
    return this.http.get<BugModel[]>('https://bug-report-system-server.herokuapp.com/bugs');
  }

  getBugsSorted(sortBy: string, sortOrder: string): Observable<BugModel[]> {
    // Example of sorting params: sort=title,desc
    const params = new HttpParams().append('sort', sortBy + ',' + sortOrder);
    return this.http.get<BugModel[]>('https://bug-report-system-server.herokuapp.com/bugs', {params});
  }
}
