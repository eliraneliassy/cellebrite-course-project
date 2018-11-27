import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() item: Item;
  @Input() existInCart: boolean;
  @Output() addToCart: EventEmitter<Item> = new EventEmitter<Item>();
  @Output() removeFromCart: EventEmitter<Item> = new EventEmitter<Item>();
  constructor() { }

  ngOnInit() {
  }

  onAddToCart(item: Item) {
    this.addToCart.emit(item);
  }

  onRemoveFromCart() {
    this.removeFromCart.emit(this.item);
  }



}
