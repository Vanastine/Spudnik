import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FirebaseComponentComponent } from './firebase-component/firebase-component.component';
import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './main/main.component';
import { ErrorComponent } from './error/error.component';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';


@NgModule({
  declarations: [
    AppComponent,
    FirebaseComponentComponent,
    MainComponent,
    ErrorComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class AuthenticationService {
  userData: Observable<firebase.User>;
  
  constructor(private angularFireAuth: AngularFireAuth) {
  this.userData = angularFireAuth.authState;
  }
  
  /* Sign up */
  SignUp(email: string, password: string) {
  this.angularFireAuth
  .createUserWithEmailAndPassword(email, password)
  .then(res => {
  console.log('You are Successfully signed up!', res);
  })
  .catch(error => {
  console.log('Something is wrong:', error.message);
  });
  }
  
  /* Sign in */
  SignIn(email: string, password: string) {
  this.angularFireAuth
  .signInWithEmailAndPassword(email, password)
  .then(res => {
  console.log("You're in!");
  })
  .catch(err => {
  console.log('Something went wrong:',err.message);
  });
  }
  
  /* Sign out */
  SignOut() {
  this.angularFireAuth
  .signOut();
  }
}