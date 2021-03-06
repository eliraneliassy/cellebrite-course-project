import { ProductsService } from './services/products.service';



import { Component, OnInit, OnDestroy } from '@angular/core';
import { Item } from './item';



import { db } from './db';
import { ShoppingCartService } from './services/shopping-cart.service';
import { User, AuthService } from './services/auth.service';
import { Subscription, Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter } from 'rxjs/operators';

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
export class AppComponent implements OnInit, OnDestroy {




  shoppingCart: Item[];



  authSubscription: Subscription;

  searchTerm: Subject<string> = new Subject();

  constructor(private shoppingCartService: ShoppingCartService,
    private productService: ProductsService,
    private authService: AuthService) {
  }

  ngOnInit(): void {
    this.shoppingCart = this.shoppingCartService.items;

    this.searchTerm
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        filter((term) => term !== '')
      )
      .subscribe((term) =>
        console.log(term));


  }



  clearAll() {
    this.shoppingCartService.clearCart();
  }



  login() {
    this.authService.login('asdas@asd.com', 'asdasd');
  }

  getSuggestion(term) {
    this.searchTerm.next(term);
  }

  ngOnDestroy(): void {
    this.authSubscription.unsubscribe();
  }



}


