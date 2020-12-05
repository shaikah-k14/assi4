import { Component } from '@angular/core';
import {DatasrvService} from '../datasrv.service';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public srv: DatasrvService, public alertCtrl: AlertController) {}

  async feed(index){
    this.srv.food.push( this.srv.pets[index] );
    const alert = await this.alertCtrl.create({
      header: 'Success!' ,
      message: 'Pet added to feeding list',
      buttons: ['OK'],
    });
    alert.present();
  }

}
