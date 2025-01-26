// charts.state.ts
export interface ChartsState {
    lineChartData: { month: string; count: number }[];
    pieChartData: { category: string; count: number }[];
    barChartData: { supplier: string; count: number }[];
    doughnutChartData: { type: string; count: number }[];
}

export const initialChartsState: ChartsState = {
    lineChartData: [],
    pieChartData: [],
    barChartData: [],
    doughnutChartData: [],
};
