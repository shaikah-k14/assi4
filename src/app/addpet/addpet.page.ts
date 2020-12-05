import { Component, OnInit } from '@angular/core';
import {DatasrvService} from '../datasrv.service';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-addpet',
  templateUrl: './addpet.page.html',
  styleUrls: ['./addpet.page.scss'],
})
export class AddpetPage implements OnInit {

  public name;
  public type;

  constructor(public srv: DatasrvService, public alertCtrl: AlertController) { }

  ngOnInit() {
  }

  async Add(){
    this.srv.pets.push({name: this.name, type: this.type, isChecked: false});
    const alert = await this.alertCtrl.create({
      header: 'Success!' ,
      message: 'Pet is added',
      buttons: ['OK'],
    });
    alert.present();
  }

}
