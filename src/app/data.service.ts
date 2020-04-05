import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Application } from './application.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  apiUrl = 'http://localhost:8080/jobapp';
  rootApiUrl = "http://localhost:8080";

  constructor(private _http: HttpClient) { }

  getApplications() {
    return this._http.get<Application[]>(this.apiUrl);
  }

  addApplication(applic: Application){
    return this._http.post<any>(this.apiUrl,applic);
  }
}
