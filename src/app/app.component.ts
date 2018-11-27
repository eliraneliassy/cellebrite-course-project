


import { Component } from '@angular/core';
import { Item } from './item';



import { db } from './db';

export class Item2 {
  title: string;
  constructor(title: string) {
    this.title = title;
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  items: Item[] = [];

  shoppingCart: Item[] = [];

  constructor() {
    this.items = db;
  }

  addToCart(item: Item): void {
    this.shoppingCart.push(item);
  }

  existInCart(item: Item): boolean {
    return this.shoppingCart.includes(item);
  }


}


