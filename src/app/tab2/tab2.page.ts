import { AlertController } from '@ionic/angular';
import { Component } from '@angular/core';
import { DatasrvService } from '../datasrv.service';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  indexes: number[] = [];
  constructor(public srv: DatasrvService, public alertCtrl: AlertController) {

  }

  checkboxUpdater(event, index) {
    console.log(event.target.checked);
    if (event.target.checked) {
      this.indexes.push(index);
      console.log(this.indexes);
    } else if (!event.target.checked) {
      this.indexes = this.indexes.filter(myIndex => myIndex !== index);
      console.log(this.indexes);
    }
  }


  feed(myType: string) {

    let isSameType = true;

    this.indexes.forEach((myIndex) => {
      if (this.srv.food[myIndex].type.toLowerCase() !== myType.toLowerCase()) {
        isSameType = false;
      }
    });

    console.log(`All Selected are the same ? ${isSameType}`);

    if (isSameType) {
      this.indexes.forEach((myIndex) => {
        this.srv.food.splice(myIndex, 1);
        this.indexes = this.indexes.filter(myIndex2 => myIndex2 !== myIndex);
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

