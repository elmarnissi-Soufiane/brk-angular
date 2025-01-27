import { createReducer, on } from '@ngrx/store';
import { FournisseurState, initialFournisseurState } from './fournisseur.state';
import {
    loadFournisseurs,
    loadFournisseursSuccess,
    loadFournisseursFailure,
    addFournisseurSuccess,
    addFournisseurFailure,
    updateFournisseurSuccess,
    updateFournisseurFailure,
    deleteFournisseurSuccess,
    deleteFournisseurFailure
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
    })),
    on(addFournisseurSuccess, (state, { fournisseur }) => ({
        ...state,
        fournisseurs: [...state.fournisseurs, fournisseur],
    })),
    on(addFournisseurFailure, (state, { error }) => ({
        ...state,
        error,
    })),
    on(updateFournisseurSuccess, (state, { fournisseur }) => ({
        ...state,
        fournisseurs: state.fournisseurs.map((f) =>
            f.id === fournisseur.id ? fournisseur : f
        ),
    })),
    on(updateFournisseurFailure, (state, { error }) => ({
        ...state,
        error,
    })),
    on(deleteFournisseurSuccess, (state, { id }) => ({
        ...state,
        fournisseurs: state.fournisseurs.filter(f => f.id !== id),
    })),
    on(deleteFournisseurFailure, (state, { error }) => ({
        ...state,
        error,
    }))
);
