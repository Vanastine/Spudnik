import { Component } from '@angular/core';
import { AuthService } from '../shared/services/auth';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(
    public authService: AuthService, 
    private db: AngularFireDatabase) { }

  checkFields() {
    
  }

  tabVisible = false
  //saveData function params inputValue: string, descrip: string, itemVal: string
  saveData(inputValue: string) {
    const item = this.db.list(`/${this.authService.userData.uid}/items/`);
    //const itemInfo = this.db.list(`/${this.authService.userData.uid}/items/${this.authService.userData.itemVal}`)
    item.push(inputValue).then((resp) => {
      console.log(resp);
    }).catch((error) => {
      console.error(error);
    })
    /*
    REMOVED UNTIL FIXED

    itemInfo.push(descrip).then((resp) => {
      console.log(resp);
    }).catch((error) => {
      console.error(error);
    })

    itemInfo.push(itemVal).then((resp) => {
      console.log(resp);
    }).catch((error) => {
      console.error(error);
    })
    */
  }
  
  ngOnInit() { }
}
