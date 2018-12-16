import { ProductsService } from './../../services/products.service';
import { Effect, Actions } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { switchMap, map } from 'rxjs/operators';
import { Item } from 'src/app/item';
import * as fromActions from './action';

@Injectable()
export class ProductsEffects {
    constructor(private actions$: Actions,
        private productService: ProductsService) {}

    @Effect()
    fetchItems$ = this.actions$.ofType(fromActions.FETCH_ITEMS)
        .pipe(
            switchMap(() => this.productService.getItems(0)
                .pipe(
                    map((items: Item[]) =>
                        new fromActions.FetchItemsSuccess(items))
                )
            )
            );

}


