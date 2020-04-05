import { Component, OnInit } from '@angular/core';
import { Application } from '../application.model';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  applics: Application[];

  constructor(private dataService: DataService){

  }

  ngOnInit(){
    return this.dataService.getApplications().subscribe(data => this.applics = data);
  }


}
