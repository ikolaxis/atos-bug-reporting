import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BugModel } from './bug.model';

@Injectable({
  providedIn: 'root'
})
export class BugsService {

  constructor(private http: HttpClient) { }

  get(): Observable<BugModel[]> {
    return this.http.get<BugModel[]>('https://bug-report-system-server.herokuapp.com/bugs');
  }
}
