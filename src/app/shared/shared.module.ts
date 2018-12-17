import { HighlightPriceDirective } from './directives/highlight-price.directive';
import { InfinteScrollDirective } from './directives/infinte-scroll.directive';
import { DiscountPipe } from './pipes/discount.pipe';
import { ItemComponent } from './item/item.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    ItemComponent,
    DiscountPipe,
    InfinteScrollDirective,
    HighlightPriceDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ItemComponent,
    DiscountPipe,
    InfinteScrollDirective,
    HighlightPriceDirective
  ]
})
export class SharedModule { }
