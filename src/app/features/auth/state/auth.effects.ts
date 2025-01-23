// src/app/features/auth/state/auth.effects.ts

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { login, loginSuccess, loginFailure, register, registerSuccess, registerFailure } from './auth.actions';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions, private authService: AuthService) { }

  // Login Effect
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(login),
      switchMap(({ email, password }) =>
        this.authService.login(email, password).pipe(
          map((user) => loginSuccess({ user })),
          catchError((error) => of(loginFailure({ error: error.message })))
        )
      )
    )
  );

  // Register Effect
  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(register),
      switchMap(({ newUser }) =>
        this.authService.register(newUser).pipe(
          map((user) => registerSuccess({ user })),
          catchError((error) => of(registerFailure({ error: error.message })))
        )
      )
    )
  );
}
