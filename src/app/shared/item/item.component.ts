import {
  Component, OnInit, Input, Output, EventEmitter,
  ChangeDetectionStrategy, OnChanges, SimpleChanges, OnDestroy, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, DoCheck,
} from '@angular/core';
import { Item } from 'src/app/item';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {


  @Input() itemInput: Item;
  @Input() existInCart: boolean;
  @Output() addToCart: EventEmitter<Item> = new EventEmitter<Item>();
  @Output() removeFromCart: EventEmitter<Item> = new EventEmitter<Item>();
  constructor() { }

  ngOnInit() {
  }

  onAddToCart() {
    this.addToCart.emit(this.itemInput);
  }

  onRemoveFromCart() {
    this.removeFromCart.emit(this.itemInput);
  }

  // ngDoCheck(): void {
  //   console.log('ng do check');
  // }
  // ngAfterViewInit(): void {
  //   console.log('ng after view init');
  // }
  // ngAfterViewChecked(): void {
  //   console.log('ng after view checked');
  // }
  // ngAfterContentInit(): void {
  //   console.log('ng After content Init');
  // }
  // ngAfterContentChecked(): void {
  //   console.log('ng after cotent checked');
  // }

  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log(changes);
  // }

  // ngOnDestroy(): void {
  //   console.log('on destroy');
  // }




}
