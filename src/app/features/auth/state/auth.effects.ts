// src/app/features/auth/state/auth.effects.ts

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { login, loginSuccess, loginFailure, register, registerSuccess, registerFailure } from './auth.actions';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions,
    private authService: AuthService,
    private router: Router) { }

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

  // Redirect after successful login
  loginSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(loginSuccess),
        tap(() => this.router.navigate(['/dashboard'])) // Redirect to dashboard
      ),
    { dispatch: false } // No need to dispatch a new action
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
