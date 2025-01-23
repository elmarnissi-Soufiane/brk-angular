import { createSelector, createFeatureSelector } from '@ngrx/store';

export interface AppState {
    users: any[];
    products: any[];
    categories: any[];
    fournisseurs: any[];
    commandes: any[];
}

// Get the entire app state
export const selectAppState = createFeatureSelector<AppState>('appState');

// Individual selectors for each slice of state
export const selectUsers = createSelector(selectAppState, (state) => state.users);
export const selectProducts = createSelector(selectAppState, (state) => state.products);
export const selectCategories = createSelector(selectAppState, (state) => state.categories);
export const selectFournisseurs = createSelector(selectAppState, (state) => state.fournisseurs);
export const selectCommandes = createSelector(selectAppState, (state) => state.commandes);
