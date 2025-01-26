// charts.effects.ts
import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { map, switchMap, tap } from 'rxjs/operators';
import {
    loadLineChartData,
    loadLineChartDataSuccess,
    loadPieChartData,
    loadPieChartDataSuccess,
    loadBarChartData,
    loadBarChartDataSuccess,
    loadDoughnutChartData,
    loadDoughnutChartDataSuccess
} from './courtier.actions';
import { CourtiersService } from '../services/courtiers.service';

@Injectable()
export class ChartsEffects {
    constructor(private actions$: Actions, private dashboardService: CourtiersService) { }

    loadLineChartData$ = createEffect(() =>
        this.actions$.pipe(
            ofType(loadLineChartData),
            switchMap(() =>
                this.dashboardService.getLineChartData().pipe(
                    tap((data) => console.log('Line Chart Data:', data)), // Afficher les données dans la console
                    map((data) => loadLineChartDataSuccess({ data }))
                )
            )
        )
    );

    loadPieChartData$ = createEffect(() =>
        this.actions$.pipe(
            ofType(loadPieChartData),
            switchMap(() =>
                this.dashboardService.getPieChartData().pipe(
                    tap((data) => console.log('Pie Chart Data:', data)), // Afficher les données dans la console
                    map((data) => loadPieChartDataSuccess({ data }))
                )
            )
        )
    );

    loadBarChartData$ = createEffect(() =>
        this.actions$.pipe(
            ofType(loadBarChartData),
            switchMap(() =>
                this.dashboardService.getBarChartData().pipe(
                    tap((data) => console.log('Bar line Chart Data:', data)), // Afficher les données dans la console
                    map((data) => loadBarChartDataSuccess({ data }))
                )
            )
        )
    );

    loadDoughnutChartData$ = createEffect(() =>
        this.actions$.pipe(
            ofType(loadDoughnutChartData),
            switchMap(() =>
                this.dashboardService.getDoughnutChartData().pipe(
                    tap((data) => console.log('Doughnut Pie Chart Data:', data)), // Afficher les données dans la console
                    map((data) => loadDoughnutChartDataSuccess({ data }))
                )
            )
        )
    );
}
