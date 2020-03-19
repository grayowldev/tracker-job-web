import { Component, OnInit } from '@angular/core';
import { Application } from './application.model';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'TrackerJob-front';

  applics: Application[];

  constructor(private dataService: DataService){

  }

  ngOnInit(){
    return this.dataService.getApplications().subscribe(data => this.applics = data);
  }
}
