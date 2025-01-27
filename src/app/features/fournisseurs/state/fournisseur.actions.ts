import { createAction, props } from '@ngrx/store';
import { Fournisseur } from '../../../models/Fournisseur/fournisseur';

// Actions pour récupérer les fournisseurs
export const loadFournisseurs = createAction('[Fournisseur] Load Fournisseurs');
export const loadFournisseursSuccess = createAction(
    '[Fournisseur] Load Fournisseurs Success',
    props<{ fournisseurs: Fournisseur[] }>()
);
export const loadFournisseursFailure = createAction(
    '[Fournisseur] Load Fournisseurs Failure',
    props<{ error: any }>()
);

// Actions pour ajouter un fournisseur
export const addFournisseur = createAction(
    '[Fournisseur] Add Fournisseur',
    props<{ fournisseur: Fournisseur }>()
);
export const addFournisseurSuccess = createAction(
    '[Fournisseur] Add Fournisseur Success',
    props<{ fournisseur: Fournisseur }>()
);
export const addFournisseurFailure = createAction(
    '[Fournisseur] Add Fournisseur Failure',
    props<{ error: any }>()
);

// Actions pour modifier un fournisseur
export const updateFournisseur = createAction(
    '[Fournisseur] Update Fournisseur',
    props<{ fournisseur: Fournisseur }>()
);
export const updateFournisseurSuccess = createAction(
    '[Fournisseur] Update Fournisseur Success',
    props<{ fournisseur: Fournisseur }>()
);
export const updateFournisseurFailure = createAction(
    '[Fournisseur] Update Fournisseur Failure',
    props<{ error: any }>()
);

// Actions pour supprimer un fournisseur
export const deleteFournisseur = createAction(
    '[Fournisseur] Delete Fournisseur',
    props<{ id: number }>()
);
export const deleteFournisseurSuccess = createAction(
    '[Fournisseur] Delete Fournisseur Success',
    props<{ id: number }>()
);
export const deleteFournisseurFailure = createAction(
    '[Fournisseur] Delete Fournisseur Failure',
    props<{ error: any }>()
);
