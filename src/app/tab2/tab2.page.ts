import { AlertController } from '@ionic/angular';
import { Component } from '@angular/core';
import { DatasrvService } from '../datasrv.service';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  public selectedItemsList = [];
  constructor(public srv: DatasrvService, public alertCtrl: AlertController) { }

  addToList(pet, event) {
    console.log(event.target.checked);
    if (event.target.checked) {
      this.selectedItemsList.push(pet);
      console.log(this.selectedItemsList);
    } else if (!event.target.checked) {
      this.selectedItemsList.splice(this.selectedItemsList.indexOf(pet));
      console.log(this.selectedItemsList);
    }
  }


  /*
  From this point out , this.selectedItemsList has all the selected checkboxes only .. go on and do the rest :P
  */

  feed(myType: string) {
    let isSameType = true;
    this.selectedItemsList.forEach((item) => {
      if (item.type !== myType) {
        isSameType = false;
      }
    });

    if (isSameType) {
      this.srv.food.forEach((item) => {
        if (item.type === myType) {
          this.srv.food.splice(this.srv.food.indexOf(item));
        }
      });

      this.selectedItemsList.forEach((item) => {
        if (item.type === myType) {
          this.selectedItemsList.splice(this.selectedItemsList.indexOf(item));
        }
      });

    } else {
      this.alertCtrl.create({
        header: ' Wrong type',
        message: 'please select the correct pet',
        buttons: ['OK']
      }).then((alert) => alert.present());
    }
  }


}

