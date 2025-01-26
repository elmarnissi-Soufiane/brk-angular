// charts.actions.ts
import { createAction, props } from '@ngrx/store';

export const loadLineChartData = createAction(
    '[Charts] Load Line Chart Data'
);

export const loadLineChartDataSuccess = createAction(
    '[Charts] Load Line Chart Data Success',
    props<{ data: { month: string; count: number }[] }>()
);

export const loadPieChartData = createAction(
    '[Charts] Load Pie Chart Data'
);

export const loadPieChartDataSuccess = createAction(
    '[Charts] Load Pie Chart Data Success',
    props<{ data: { category: string; count: number }[] }>()
);

export const loadBarChartData = createAction(
    '[Charts] Load Bar Chart Data'
);

export const loadBarChartDataSuccess = createAction(
    '[Charts] Load Bar Chart Data Success',
    props<{ data: { supplier: string; count: number }[] }>()
);


export const loadDoughnutChartData = createAction(
    '[Charts] Load Doughnut Chart Data'
);

export const loadDoughnutChartDataSuccess = createAction(
    '[Charts] Load Doughnut Chart Data Success',
    props<{ data: { type: string; count: number }[] }>()
);
