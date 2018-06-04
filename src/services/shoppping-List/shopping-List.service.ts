import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { Item } from "../../models/item/item.model";

@Injectable()
export class shoppingListService{
    private shopppingListRef = this.db.list<Item>('/shopping-List');

    constructor(private db:AngularFireDatabase){}

    getShoppingList(){
        return this.shopppingListRef;
    }
    AddItem(item:Item){
        return this.shopppingListRef.push(item);
    }
    editItem(item:Item){
        return this.shopppingListRef.update(item.key,item);
    }
    removeItem(item:Item){
        return this.shopppingListRef.remove(item.key);
    }
}