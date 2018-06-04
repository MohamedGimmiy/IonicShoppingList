import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { shoppingListService } from '../../services/shoppping-List/shopping-List.service';
import { Item } from '../../models/item/item.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { EditShoppingItemPage } from '../edit-shopping-item/edit-shopping-item';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  shoppingList$ : AngularFireList<any>;

  items: Observable<Item[]>;

  constructor(public navCtrl: NavController , public shopping:shoppingListService) {

    this.shoppingList$ = this.shopping.getShoppingList();


    this.items = this.shoppingList$  // Return DB list
    .snapshotChanges().pipe(
      map(changes=>   // mapping over these changes
       changes.map(c=>({  // for each change return an object
          key: c.payload.key, ...c.payload.val()
        }))
      )
    ); // key and value
    


    
  }

}
