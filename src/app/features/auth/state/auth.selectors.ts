// src/app/features/auth/state/auth.selectors.ts

import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from './auth.state';

// Selector for accessing the auth state
export const selectAuthState = createFeatureSelector<AuthState>('auth');

// Selector to get the current user
export const selectCurrentUser = createSelector(
  selectAuthState,
  (state) => state.user
);

// Selector to get loading state
export const selectLoading = createSelector(
  selectAuthState,
  (state) => state.loading
);

// Selector to get error state
export const selectError = createSelector(
  selectAuthState,
  (state) => state.error
);
