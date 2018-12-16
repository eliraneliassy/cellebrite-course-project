import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';

import * as fromProducts from '../products/store/reducer';

export interface State {
  products: fromProducts.ProductState;
}

export const reducers: ActionReducerMap<State> = {
  products: fromProducts.reducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

export const getProducsSate =
  createFeatureSelector<fromProducts.ProductState>('products');


export const getAllItems =
  createSelector(getProducsSate,
    (state: fromProducts.ProductState) => state.data);


