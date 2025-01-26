import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { Chart, DoughnutController, ArcElement, Tooltip, Legend } from 'chart.js';
import { Observable } from 'rxjs';
import { loadDoughnutChartData } from '../../../../state/courtier.actions';
import { selectDoughnutChartData } from '../../../../state/courtier.selectors';

// Enregistrer les composants nécessaires pour le graphique
Chart.register(DoughnutController, ArcElement, Tooltip, Legend);

@Component({
  selector: 'app-options-for-pie',
  standalone: true,
  imports: [],
  templateUrl: './options-for-pie.component.html',
  styleUrl: './options-for-pie.component.css'
})
export class OptionsForPieComponent {

  doughnutChartData$: Observable<{ type: string; count: number }[]> = new Observable<{ type: string; count: number }[]>();

  constructor(private store: Store) { }

  ngOnInit(): void {
    // Dispatch the action to load the Doughnut Chart data
    this.store.dispatch(loadDoughnutChartData());

    // Select the doughnut chart data from the store
    this.doughnutChartData$ = this.store.select(selectDoughnutChartData);

    // Subscribe to the data and create the chart
    this.doughnutChartData$.subscribe(data => {
      this.createDoughnutChart(data);
    });
  }

  // Method to create or update the doughnut chart
  createDoughnutChart(data: { type: string; count: number }[]): void {
    const doughnutChart = new Chart('doughnutChart', {
      type: 'doughnut',
      data: {
        labels: data.map(item => item.type), // Dynamic labels (types)
        datasets: [{
          label: 'Order Types',
          data: data.map(item => item.count), // Dynamic data (counts)
          backgroundColor: ['#FFB74D', '#4CAF50', '#42A5F5'], // Example colors
          hoverOffset: 4
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { position: 'top' },
          tooltip: {
            callbacks: {
              label: (tooltipItem) => tooltipItem.label + ': ' + tooltipItem.raw + ' Orders'
            }
          }
        }
      }
    });
  }

}
