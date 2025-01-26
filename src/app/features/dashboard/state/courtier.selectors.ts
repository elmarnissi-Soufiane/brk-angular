// charts.selectors.ts
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { ChartsState } from './courtier.state';

export const selectChartsState = createFeatureSelector<ChartsState>('charts');

export const selectLineChartData = createSelector(
    selectChartsState,
    (state) => state.lineChartData
);

export const selectPieChartData = createSelector(
    selectChartsState,
    (state) => state.pieChartData
);

export const selectBarChartData = createSelector(
    selectChartsState,
    (state) => state.barChartData
);

export const selectDoughnutChartData = createSelector(
    selectChartsState,
    (state) => state.doughnutChartData
);
