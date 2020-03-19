import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Application } from './application.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  apiUrl = 'http://localhost:8080/jobapp';

  constructor(private _http: HttpClient) { }

  getApplications() {
    return this._http.get<Application[]>(this.apiUrl);
  }
}
