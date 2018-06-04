import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Item } from '../../models/item/item.model';
import { shoppingListService } from '../../services/shoppping-List/shopping-List.service';
import { HomePage } from '../home/home';
import { ToastService } from '../../services/Toast/toast.service';

/**
 * Generated class for the EditShoppingItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-shopping-item',
  templateUrl: 'edit-shopping-item.html',
})
export class EditShoppingItemPage {
  item :Item;
  constructor(public navCtrl: NavController,
     public navParams: NavParams, private shopping:shoppingListService,private toast:ToastService) {}

  // ionic life cycle important function
  ionViewWillLoad() {
    this.item = this.navParams.get('item');
  }

  SaveItem(item:Item){
    this.shopping.editItem(item).then(()=>{
      this.toast.show(`${item.name} saved!`); // template binding  using ``
      this.navCtrl.setRoot(HomePage);
    });
  }
  DeleteItem(item:Item){
    this.shopping.removeItem(item).then(()=>{
      this.toast.show(`${item.name} removed`);
      this.navCtrl.setRoot(HomePage);
    });
  }
}
