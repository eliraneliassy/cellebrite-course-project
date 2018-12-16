import { Item } from 'src/app/item';
import * as fromProducts from '../store/action';

export interface ProductState {
    data: Item[];
    loaded: boolean;
    loading: boolean;
}

export const initalState: ProductState = {
    data: [],
    loaded: false,
    loading: false
};

export function reducer(state = initalState
    , action: fromProducts.ProductsAction): ProductState {
    switch (action.type) {
        case (fromProducts.FETCH_ITEMS): {
            return { ...state, loading: true };
        }
        case (fromProducts.FETCH_ITEMS_SUCCESS): {
            return {
                ...state, loaded: true, loading: false,
                data: action.payload
            };
        }
    }
    return state;
}

export const getProductsLoading = (state: ProductState) => state.loading;
export const getProductsLoaded = (state: ProductState) => state.loaded;
export const getProducts = (state: ProductState) => state.data;
