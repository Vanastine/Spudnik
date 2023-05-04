import { Component } from '@angular/core';
import { AuthService } from '../shared/services/auth';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/compat/database';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  userId = this.authService.userData.uid

  constructor(
    public authService: AuthService, 
    private db: AngularFireDatabase) { }

  checkFields() {
    
  }

  tabVisible = false
  //saveData function params inputValue: string, descrip: string, itemVal: string
  saveData(itemTitle: string, itemDesc: string, itemValue: string) {
    const items = this.db.list(`/Users/${this.userId}/Items`);
    items.push({
        ItemTitle: itemTitle,
        ItemDescription: itemDesc,
        ItemValue: itemValue,
      });
  }
}
