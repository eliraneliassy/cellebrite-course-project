import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { HighlightPriceDirective } from './directives/highlight-price.directive';
import { InfinteScrollDirective } from './directives/infinte-scroll.directive';
import { DiscountPipe } from './pipes/discount.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    HighlightPriceDirective,
    InfinteScrollDirective,
    DiscountPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
