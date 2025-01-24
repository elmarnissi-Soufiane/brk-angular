import { createReducer, on } from '@ngrx/store';
import { fetchInitialDataSuccess } from './app.actions';
import { AppState } from './app.state';

export const initialState: AppState = {
    users: [],
    products: [],
    categories: [],
    fournisseurs: [],
    commandes: [],
};

export const rootReducer = createReducer(
    initialState,
    on(fetchInitialDataSuccess, (state, { endpoint, payload }) => {
        const key = endpoint.replace('/', '');  // Formatage de l'endpoint pour obtenir la clé
        return { ...state, [key]: payload }; // Met à jour la bonne section de l'état
    })
);
