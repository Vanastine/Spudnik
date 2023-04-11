import { Component, Input } from '@angular/core';
import { AuthenticationService } from '../app.module';
@Component({
  selector: 'app-firebase-component',
  templateUrl: './firebase-component.component.html',
  styleUrls: ['./firebase-component.component.css']
})
export class FirebaseComponentComponent {
  constructor(private authenticationService:AuthenticationService){

  }

  email: string;
  password: string;

  signUp() {
    this.authenticationService.SignUp(this.email, this.password);
    this.email = '';
    this.password = '';
  }

  signIn() {
    this.authenticationService.SignIn(this.email, this.password);
    this.email = '';
    this.password = '';
  }
    
  signOut() {
    this.authenticationService.SignOut();
  }
}
