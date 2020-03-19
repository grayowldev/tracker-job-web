import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { TableComponent } from './table/table.component';
import { DataService } from './data.service';
import { RouterModule } from '@angular/router';
import { AddApplicationComponent } from './add-application/add-application.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    TableComponent,
    AddApplicationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'add-application', component: AddApplicationComponent}
    ])
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
