import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Chart, BarController, CategoryScale, LinearScale, Title, Tooltip, Legend, BarElement } from 'chart.js';
import { Observable } from 'rxjs';
import { loadBarChartData } from '../../../../state/courtier.actions';
import { selectBarChartData } from '../../../../state/courtier.selectors';

// Enregistrer les composants nécessaires pour le graphique
Chart.register(CategoryScale, LinearScale, Title, Tooltip, Legend, BarElement, BarController);


@Component({
  selector: 'app-options-for-line',
  standalone: true,
  imports: [],
  templateUrl: './options-for-line.component.html',
  styleUrl: './options-for-line.component.css'
})
export class OptionsForLineComponent implements OnInit {

  barChartData$!: Observable<{ supplier: string; count: number }[]>;

  constructor(private store: Store) { }

  ngOnInit(): void {
    // Dispatch action to load the bar chart data
    this.store.dispatch(loadBarChartData());

    // Select bar chart data from the store
    this.barChartData$ = this.store.select(selectBarChartData);

    // Subscribe to the data and update the chart
    this.barChartData$.subscribe(data => {
      this.createBarChart(data);
    });
  }

  // Method to create or update the bar chart
  createBarChart(data: { supplier: string; count: number }[]): void {
    const barChart = new Chart('barChart', {
      type: 'bar',
      data: {
        labels: data.map(item => item.supplier), // Using dynamic labels (suppliers)
        datasets: [{
          label: 'Revenue',
          data: data.map(item => item.count), // Using dynamic data (counts)
          backgroundColor: '#42A5F5',
          borderColor: '#1E88E5',
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        scales: {
          x: { title: { display: true, text: 'Suppliers' } },
          y: { title: { display: true, text: 'Revenue' }, beginAtZero: true }
        }
      }
    });
  }

}
