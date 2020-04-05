import { Component, OnInit } from '@angular/core';
import { Application } from '../application.model';
import { DataService } from '../data.service';

@Component({
  selector: 'app-add-application',
  templateUrl: './add-application.component.html',
  styleUrls: ['./add-application.component.scss']
})
export class AddApplicationComponent implements OnInit {

  newApplication: Application = new Application();
  date:string;
  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.newApplication);
    this.date = new Date().toLocaleString().split(", ")[0].trim();
    this.newApplication.dateApplied = this.date;
    console.log(this.date);
    this.dataService.addApplication(this.newApplication).subscribe(
      data => console.log("Success!", data),
      error => console.log("Error", error)
    )
  }

}
