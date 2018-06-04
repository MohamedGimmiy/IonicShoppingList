import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Item } from '../../models/item/item.model';
import { shoppingListService } from '../../services/shoppping-List/shopping-List.service';
import { HomePage } from '../home/home';
import { ToastService } from '../../services/Toast/toast.service';
/**
 * Generated class for the AddShoppingItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-shopping-item',
  templateUrl: 'add-shopping-item.html',
})
export class AddShoppingItemPage {
  item : Item = {
    name : '',
    quantity : undefined,
    price : undefined,
  }



  constructor(public navCtrl: NavController, public navParams: NavParams
    ,private shopping: shoppingListService, private toast : ToastService) {


  }

  addItem(item:Item){
    this.shopping.AddItem(item).then(ref=>{
      this.toast.show(`${item.name} added`);
      this.navCtrl.setRoot(HomePage,{key : ref.key});
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddShoppingItemPage');
  }

}
