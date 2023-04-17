import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FirebaseComponentComponent } from './firebase-component/firebase-component.component';
import { MainComponent } from './main/main.component';
import { ErrorComponent } from './error/error.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutUsComponent } from './about-us/about-us.component';



const routes: Routes = [
  { path: '', component: MainComponent},
  { path: 'firebase', component: FirebaseComponentComponent},
  { path: 'about-us', component: AboutUsComponent},
  { path: 'sign-in', component: SignInComponent},
  { path: 'sign-up', component: SignUpComponent},
  { path: 'verify-email', component: VerifyEmailComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'forgot-password', component: ForgotPasswordComponent},
  { path: '**', component: ErrorComponent},
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
