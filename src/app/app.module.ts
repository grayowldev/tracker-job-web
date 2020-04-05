import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'

//  Firebase libs
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule, AngularFireAuth } from '@angular/fire/auth';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { TableComponent } from './table/table.component';
import { DataService } from './data.service';
import { RouterModule } from '@angular/router';
import { AddApplicationComponent } from './add-application/add-application.component';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PageHolderComponent } from './page-holder/page-holder.component';
import { config } from 'rxjs';

import { firebaseConfig } from 'src/environments/fire-config';


const fconfig = firebaseConfig;

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    TableComponent,
    AddApplicationComponent,
    HomeComponent,
    SidebarComponent,
    PageHolderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', component: PageHolderComponent},
      {path: 'add-application', component: AddApplicationComponent}
    ]),
    AngularFireModule.initializeApp(fconfig),
    AngularFireModule,
    AngularFireAuthModule,
    AngularFireStorageModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
