
import { Component } from '@angular/core';
import { DatasrvService } from '../datasrv.service';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  public selectedItemsList: any = [];

  constructor(public srv: DatasrvService) { }



  fishfood(pet) {
    if (pet.isChecked == true) {
      if (pet.isChecked.type === "Fish") {
        let index = this.srv.food.indexOf(pet);
        this.srv.food.splice(index);
      }
      //this.selectedItemsList.push(pet);
    }



  }


}