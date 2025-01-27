import { createReducer, on } from '@ngrx/store';
import { FournisseurState, initialFournisseurState } from './fournisseur.state';
import {
    loadFournisseurs,
    loadFournisseursSuccess,
    loadFournisseursFailure
} from './fournisseur.actions';

export const fournisseurReducer = createReducer(
    initialFournisseurState,
    on(loadFournisseurs, (state) => ({
        ...state,
        loading: true,
        error: null,
    })),
    on(loadFournisseursSuccess, (state, { fournisseurs }) => ({
        ...state,
        loading: false,
        fournisseurs,
    })),
    on(loadFournisseursFailure, (state, { error }) => ({
        ...state,
        loading: false,
        error,
    }))
);
