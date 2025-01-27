import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { loadFournisseurs, loadFournisseursSuccess, loadFournisseursFailure } from './fournisseur.actions';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { FournisseurService } from '../services/fournisseur.service';
import { Fournisseur } from '../../../models/Fournisseur/fournisseur';

@Injectable()
export class FournisseurEffects {
  constructor(private actions$: Actions, private fournisseurService: FournisseurService) { }

  loadFournisseurs$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadFournisseurs),
      switchMap(() =>
        this.fournisseurService.getFournisseurs().pipe(
          tap((fournisseurs) => console.log('Data Products:', fournisseurs)),
          map((fournisseurs: Fournisseur[]) =>
            loadFournisseursSuccess({ fournisseurs })
          ),
          catchError((error) =>
            of(loadFournisseursFailure({ error: error.message }))
          )
        )
      )
    )
  );
}
