// src/app/features/auth/state/auth.reducers.ts

import { createReducer, on } from '@ngrx/store';
import { login, loginSuccess, loginFailure, logout, registerSuccess, registerFailure } from './auth.actions';
import { AuthState } from './auth.state';

export const initialState: AuthState = {
  user: null,
  error: null,
  loading: false,
};

export const authReducer = createReducer(
  initialState,
  // Login Actions
  on(login, (state) => ({ ...state, loading: true, error: null })),
  on(loginSuccess, (state, { user }) => ({
    ...state,
    user,
    loading: false,
    error: null,
  })),
  on(loginFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),

  // Logout Action
  on(logout, (state) => ({
    ...state,
    user: null,
  })),

  // Register Actions
  on(registerSuccess, (state, { user }) => ({
    ...state,
    user,
    loading: false,
    error: null,
  })),
  on(registerFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);
