import { createAction, props } from '@ngrx/store';

export const fetchInitialData = createAction(
    '[App] Fetch Initial Data',
    props<{ endpoint: string }>()
);

export const fetchInitialDataSuccess = createAction(
    '[App] Fetch Data Success',
    props<{ endpoint: string; payload: any[] }>()
);
