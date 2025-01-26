// charts.reducer.ts
import { createReducer, on } from '@ngrx/store';
import { initialChartsState, ChartsState } from './courtier.state';
import {
    loadLineChartDataSuccess,
    loadPieChartDataSuccess,
    loadBarChartDataSuccess,
    loadDoughnutChartDataSuccess
} from './courtier.actions';

export const chartsReducer = createReducer(
    initialChartsState,
    on(loadLineChartDataSuccess, (state, { data }) => ({
        ...state,
        lineChartData: data
    })),
    on(loadPieChartDataSuccess, (state, { data }) => ({
        ...state,
        pieChartData: data
    })),
    on(loadBarChartDataSuccess, (state, { data }) => ({
        ...state,
        barChartData: data
    })),
    on(loadDoughnutChartDataSuccess, (state, { data }) => ({
        ...state,
        doughnutChartData: data
    }))
);
