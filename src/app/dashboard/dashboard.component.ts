import { Component, Input } from '@angular/core';
import { AuthService } from '../shared/services/auth';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  userId = this.authService.userData.uid
  itemTitle: string = ""
  itemDesc: string = ""
  itemVal: string = ""
  list: any

  constructor(
    public authService: AuthService, 
    public db: AngularFireDatabase) { }

  tabVisible = false
  //saveData function params inputValue: string, descrip: string, itemVal: string
  saveData(itemTitle: string, itemDesc: string, itemVal: string) {
    const items = this.db.list(`/Users/${this.userId}/Items`);
    items.push({
      ItemTitle: itemTitle,
      ItemDescription: itemDesc,
      ItemValue: itemVal,
    });

    this.retrieveData()

    this.itemTitle= ""
    this.itemDesc= ""
    this.itemVal= ""
  }

  retrieveData() {
    const items = this.db.list(`/Users/${this.userId}/Items`);
    items.valueChanges().subscribe((data) => { this.list = data;});
    console.log(items)
  }
}
