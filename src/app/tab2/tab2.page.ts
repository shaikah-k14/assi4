
import { Component } from '@angular/core';
import { DatasrvService } from '../datasrv.service';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  public selectedItemsList = [];
  constructor(public srv: DatasrvService) { }

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

  fishfood(pet) {
    if (pet.isChecked === true) {
      if (pet.isChecked.type === 'Fish') {
        const index = this.srv.food.indexOf(pet);
        this.srv.food.splice(index);
      }
      // this.selectedItemsList.push(pet);
    }



  }


}
