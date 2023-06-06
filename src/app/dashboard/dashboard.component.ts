import { Component } from '@angular/core';
import { AuthService } from '../shared/services/auth';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { openCloseTrigger } from 'environments/page-animation';
import { ModalitemComponent } from 'app/modalitem/modalitem.component';
import { Router } from '@angular/router';
import { Observable, map } from 'rxjs';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  animations: [openCloseTrigger]
})
export class DashboardComponent {
  userId = this.authService.userData.uid
  itemTitle: string = ""
  itemDesc: string = ""
  itemVal: string = ""
  itemsRef: AngularFireList<any>
  items: Observable<any[]>
  tabVisible = false
  list: any
  isShown = false

  constructor(
    public authService: AuthService,
    public db: AngularFireDatabase,
    public modalItemComp: ModalitemComponent,
    public router: Router) {
      this.itemsRef = db.list(`/Users/${this.userId}/Items`)
      this.items = this.itemsRef.snapshotChanges().pipe(map(changes => changes.map(c => ({ key: c.payload.key, ...c.payload.val()}))));
    }

  //saveData function params inputValue: string, descrip: string, itemVal: string
  saveData(itemTitle: string, itemDesc: string, itemVal: string) {    
    this.itemsRef.push({
      ItemTitle: itemTitle,
      ItemDescription: itemDesc,
      ItemValue: itemVal,
      ID: Math.random(),
    });

    this.itemTitle= ""
    this.itemDesc= ""
    this.itemVal= ""
  }

  //Retrieves Items From User DB
  retrieveData() {
    const items = this.db.list(`/Users/${this.userId}/Items/`);
    items.valueChanges().subscribe((data) => { this.list = data });
    console.log(this.items)
  }

  //Updates Item Selected
  updateItem(key: string, itemTitle: string, itemDesc: string, itemVal: string) {
    this.itemsRef.update(key, {
      ItemTitle: itemTitle,
      ItemDesc: itemDesc,
      ItemVal: itemVal
    })
  }

  //Deletes Item Selected
  deleteItem(key: string) {
    this.itemsRef.remove(key)
  }

  navToItem(itemKey: any, item: any) {
    this.router.navigate([`dashboard/${itemKey}`]);
  }

  //Toggles Visibility of Item
  toggleShow() {
    this.isShown != this.isShown
  }
}
