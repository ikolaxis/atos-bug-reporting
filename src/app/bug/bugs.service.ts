import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BugModel } from './bug.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BugsService {

  private endpoint = "https://bug-report-system-server.herokuapp.com/bugs";

  constructor(private http: HttpClient) { }

  getBugs(): Observable<BugModel[]> {
    return this.http.get<BugModel[]>(this.endpoint);
  }
}
