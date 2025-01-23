import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import { switchMap, map } from 'rxjs/operators';
import { fetchInitialData, fetchInitialDataSuccess } from './app.actions';

@Injectable()
export class AppEffects {
    constructor(private actions$: Actions, private http: HttpClient) { }

    fetchData$ = createEffect(() =>
        this.actions$.pipe(
            ofType(fetchInitialData),
            switchMap(({ endpoint }) =>
                this.http.get<any[]>(`http://localhost:3000${endpoint}`).pipe(
                    map((data) => fetchInitialDataSuccess({ endpoint, payload: data }))
                )
            )
        )
    );
}
