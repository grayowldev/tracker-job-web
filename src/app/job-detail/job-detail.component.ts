import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Application } from '../application.model';

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.scss']
})
export class JobDetailComponent implements OnInit {

  jobs: Application[];
  activeJob: Application;
  

  constructor(private dataService: DataService){

  }

  // message="It works"

  ngOnInit(){
    this.dataService.currentJob.subscribe(activeJob => this.activeJob = activeJob)
   
    // console.log(this.activeJob.companyName)
    return this.dataService.getApplications().subscribe(data => this.jobs = data);
  }

}
