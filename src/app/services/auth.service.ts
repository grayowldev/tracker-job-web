import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { User } from '../models/user.model';
import { auth } from 'firebase/app'
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { switchMap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$: Observable<User>

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router
  ) {

      this.user$ = this.afAuth.authState.pipe(
        switchMap( user => {
          if (user) {
            return this.afs.doc<User>(`user/${user.uid}`).valueChanges();
          } else {
            return of(null);
          }
        })
      )

      
   }
}
