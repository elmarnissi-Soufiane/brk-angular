import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FournisseurState } from './fournisseur.state';

// Sélecteur pour l'état des fournisseurs
export const selectFournisseurState = createFeatureSelector<FournisseurState>('fournisseurs');

// Sélecteur pour la liste des fournisseurs
export const selectFournisseurs = createSelector(
    selectFournisseurState,
    (state) => state.fournisseurs
);

// Sélecteur pour l'indicateur de chargement
export const selectFournisseursLoading = createSelector(
    selectFournisseurState,
    (state) => state.loading
);

// Sélecteur pour l'erreur
export const selectFournisseursError = createSelector(
    selectFournisseurState,
    (state) => state.error
);
