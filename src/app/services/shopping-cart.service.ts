import { Injectable } from '@angular/core';
import { Item } from '../item';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  items: Item[] = [];

  constructor() { }

  addToCart(item: Item) {
    this.items.push(item);
  }

  removeFromCart(item: Item) {
    const index = this.items.indexOf(item);
    if (index > -1) {
      this.items.splice(index, 1);
    }
  }

  clearCart() {
    this.items = [];
  }

  existInCart(item) {
    return this.items.includes(item);
  }
}
