import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirebaseComponentComponent } from './firebase-component/firebase-component.component';

@NgModule({
  declarations: [
    AppComponent,
    FirebaseComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
