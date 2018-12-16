import { Action } from '@ngrx/store';
import { Item } from 'src/app/item';

export const FETCH_ITEMS = '[Products] Fetch items';
export const FETCH_ITEMS_SUCCESS = '[Products] Fetch items success';

export class FetchItems implements Action {
    readonly type = FETCH_ITEMS;

}

export class FetchItemsSuccess implements Action {
    readonly type = FETCH_ITEMS_SUCCESS;
    constructor(public payload: Item[]) {}

}

export type ProductsAction = FetchItems | FetchItemsSuccess;

