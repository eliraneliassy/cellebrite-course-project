import { getAllItems } from './../../reducers/index';

import { ShoppingCartService } from './../../services/shopping-cart.service';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Item } from 'src/app/item';
import { ActivatedRoute, Params } from '@angular/router';
import * as fromStore from '../../products/store';
import { Store } from '@ngrx/store';


@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {

  items: Item[] = [];
  isLoading: boolean;
  page = 0;

  constructor(
    // private productService: ProductsService,
    private store: Store<fromStore.ProductState>,
    private shoppingCartService: ShoppingCartService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    // this.productService.getItems(this.page)
    //   .subscribe((items: Item[]) => {
    //     this.items = items;
    //     this.route.queryParams.subscribe((params: Params) => {
    //       const query: string = params['q'];
    //       if (query) {
    //         this.items = this.items.filter((item) => item.description
    //         .toLowerCase()
    //         .includes(query.toLowerCase()));
    //       }
    //     });
    //   });

    this.store.select(getAllItems)
    .subscribe((items: Item[]) => {
      console.log(items);
      this.items = items;
    });

    this.store.dispatch(new fromStore.FetchItems());

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

  loadMore() {
    // this.page++;
    // this.isLoading = true;
    // this.productService.getItems(this.page)
    //   .subscribe((newItems: Item[]) => {
    //     this.items = [...this.items, ...newItems];
    //     setTimeout(() => {
    //       this.isLoading = false;
    //     }, 500);
    //   });
  }

}
