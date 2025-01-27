import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { FournisseurService } from '../services/fournisseur.service';
import { Fournisseur } from '../../../models/Fournisseur/fournisseur';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import {
  loadFournisseurs,
  loadFournisseursSuccess,
  loadFournisseursFailure,
  addFournisseur,
  addFournisseurSuccess,
  addFournisseurFailure,
  updateFournisseur,
  updateFournisseurSuccess,
  updateFournisseurFailure,
  deleteFournisseur,
  deleteFournisseurSuccess,
  deleteFournisseurFailure
} from './fournisseur.actions';

@Injectable()
export class FournisseurEffects {

  constructor(private actions$: Actions, private fournisseurService: FournisseurService) { }

  // Effet pour charger les fournisseurs
  loadFournisseurs$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadFournisseurs),
      switchMap(() =>
        this.fournisseurService.getFournisseurs().pipe(
          map((fournisseurs: Fournisseur[]) => loadFournisseursSuccess({ fournisseurs })),
          catchError((error) => of(loadFournisseursFailure({ error })))
        )
      )
    )
  );

  // Effet pour ajouter un fournisseur
  addFournisseur$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addFournisseur),
      switchMap(({ fournisseur }) =>
        this.fournisseurService.addFournisseur(fournisseur).pipe(
          map((newFournisseur: Fournisseur) => addFournisseurSuccess({ fournisseur: newFournisseur })),
          catchError((error) => of(addFournisseurFailure({ error })))
        )
      )
    )
  );

  // Effet pour mettre à jour un fournisseur
  updateFournisseur$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateFournisseur),
      switchMap(({ fournisseur }) =>
        this.fournisseurService.updateFournisseur(fournisseur).pipe(
          map((updatedFournisseur: Fournisseur) => updateFournisseurSuccess({ fournisseur: updatedFournisseur })),
          catchError((error) => of(updateFournisseurFailure({ error })))
        )
      )
    )
  );

  // Effet pour supprimer un fournisseur
  deleteFournisseur$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteFournisseur),
      switchMap(({ id }) =>
        this.fournisseurService.deleteFournisseur(id).pipe(
          map(() => deleteFournisseurSuccess({ id })),
          catchError((error) => of(deleteFournisseurFailure({ error })))
        )
      )
    )
  );
}
