import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Application } from './application.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  apiUrl = 'http://localhost:8080/jobapp';
  rootApiUrl = "http://localhost:8080";

  napp:Application = new Application();
  
  private dataSource = new BehaviorSubject<Application>(new Application());
  currentJob = this.dataSource.asObservable();



  constructor(private _http: HttpClient) { 
    this.napp.companyName = "Zoogle";
    this.napp.location = "USA";
    this.napp.position = "Master Cheif";
  }

  // this.getApplications().subscribe()[0];

  getApplications() {
    return this._http.get<Application[]>(this.apiUrl);
  }

  addApplication(applic: Application){
    return this._http.post<any>(this.apiUrl,applic);
  }


  changeJob(job: Application){
    this.dataSource.next(job)
  }
}
