import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FirebaseComponentComponent } from './firebase-component/firebase-component.component';
import { MainComponent } from './main/main.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  { path: 'firebase', component: FirebaseComponentComponent},
  { path: '', component: MainComponent},
  { path: '**', component: ErrorComponent}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
