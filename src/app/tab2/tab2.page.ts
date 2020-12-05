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
  constructor(public srv: DatasrvService , public alertCtrl: AlertController) { }

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

 async fishfood(pet) {
    if (this.selectedItemsList.push(pet)) {
      if (pet.this.selectedItemsList.type === 'Fish') {
        const index = this.srv.food.indexOf(pet);
        this.srv.food.splice(index);
      } 
else {
  const alert = await this.alertCtrl.create({
    header: ' Wrong type' ,
    message: 'please select the correct pet',
    buttons: ['OK'],
  });
  alert.present();

}
      }
 
      // this.selectedItemsList.push(pet);
    }

   async birdfood(pet){
      if (this.selectedItemsList.push(pet)) {
      if (pet.selectedItemsList.type === 'Bird') {
        const index = this.srv.food.indexOf(pet);
        this.srv.food.splice(index);

  }
  else {
    const alert = await this.alertCtrl.create({
      header: ' Wrong type' ,
      message: 'please select the correct pet',
      buttons: ['OK'],
    });
    alert.present();
  
  }
      }}

 
      }

    