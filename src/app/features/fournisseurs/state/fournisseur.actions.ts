// fournisseur.actions.ts
import { createAction, props } from '@ngrx/store';
import { Fournisseur } from '../../../models/Fournisseur/fournisseur';

export const loadFournisseurs = createAction('[Fournisseur] Load Fournisseurs');

export const loadFournisseursSuccess = createAction(
    '[Fournisseur] Load Fournisseurs Success',
    props<{ fournisseurs: Fournisseur[] }>()
);

export const loadFournisseursFailure = createAction(
    '[Fournisseur] Load Fournisseurs Failure',
    props<{ error: any }>()
);