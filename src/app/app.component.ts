import { ProductsService } from './services/products.service';



import { Component, OnInit } from '@angular/core';
import { Item } from './item';



import { db } from './db';
import { ShoppingCartService } from './services/shopping-cart.service';

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
export class AppComponent implements OnInit {


  items: Item[] = [];
  shoppingCart: Item[];
  isLoading: boolean;
  page = 0;

  constructor(private shoppingCartService: ShoppingCartService,
    private productService: ProductsService) {
  }

  ngOnInit(): void {
    this.shoppingCart = this.shoppingCartService.items;
    this.productService.getItems(this.page)
      .subscribe((items: Item[]) => {
        this.items = items;
      });
  }

  addToCart(item) {
    this.shoppingCartService.addToCart(item);
  }

  removeFromCart(item: Item) {
    this.shoppingCartService.removeFromCart(item);
  }

  existInCart(item: Item): boolean {
    return this.shoppingCartService.existInCart(item);
  }

  clearAll() {
    this.shoppingCartService.clearCart();
  }

  loadMore() {
    this.page++;
    this.isLoading = true;
    this.productService.getItems(this.page)
      .subscribe((newItems: Item[]) => {
        this.items = [...this.items, ...newItems];
        setTimeout(() => {
          this.isLoading = false;
        }, 500);
      });
  }



}


