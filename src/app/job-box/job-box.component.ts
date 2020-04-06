import { Component, OnInit, Input } from '@angular/core';
import { Application } from '../application.model';
import { DataService } from '../data.service';

@Component({
  selector: 'app-job-box',
  templateUrl: './job-box.component.html',
  styleUrls: ['./job-box.component.scss']
})
export class JobBoxComponent implements OnInit {

  activeJob: Application;
  @Input() jobData: Application;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.currentJob.subscribe(activeJob => this.activeJob = activeJob)
  }

  changeActiveJob(jobData: Application){
    console.log("Hello")
    this.dataService.changeJob(jobData)
    
  }
  

}
