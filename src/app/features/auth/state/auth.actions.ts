// src/app/features/auth/state/auth.actions.ts

import { createAction, props } from '@ngrx/store';
import { User } from '../../../models/Auth/user';

// Login Actions
export const login = createAction(
  '[Auth] Login',
  props<{ email: string; password: string }>()
);

export const loginSuccess = createAction(
  '[Auth] Login Success',
  props<{ user: User | null }>()  // Allowing user to be User | null
);

export const loginFailure = createAction(
  '[Auth] Login Failure',
  props<{ error: string }>()
);

// Logout Action
export const logout = createAction('[Auth] Logout');

// Register Actions
export const register = createAction(
  '[Auth] Register',
  props<{ newUser: User }>()
);

export const registerSuccess = createAction(
  '[Auth] Register Success',
  props<{ user: User | null }>()  // Allowing user to be User | null
);

export const registerFailure = createAction(
  '[Auth] Register Failure',
  props<{ error: string }>()
);
