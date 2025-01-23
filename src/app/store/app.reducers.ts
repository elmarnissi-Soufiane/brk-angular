import { createReducer, on } from '@ngrx/store';
import { fetchInitialDataSuccess } from './app.actions';

export const initialState = {
    users: [],
    products: [],
    categories: [],
    fournisseurs: [],
    commandes: [],
};

export const rootReducer = createReducer(
    initialState,
    on(fetchInitialDataSuccess, (state, { endpoint, payload }) => {
        const key = endpoint.replace('/', '');
        return { ...state, [key]: payload };
    })
);
