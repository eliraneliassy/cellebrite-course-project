import { ShoppingCartService } from './../../services/shopping-cart.service';
import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/item';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  shoppingCart: Item[] = [];

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
    this.shoppingCart = this.shoppingCartService.items;
  }

  existInCart(item: Item): boolean {
    return this.shoppingCartService.existInCart(item);
  }

}
