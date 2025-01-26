import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Chart, PieController, ArcElement, Tooltip, Legend } from 'chart.js';
import { loadPieChartData } from '../../../../state/courtier.actions';
import { selectPieChartData } from '../../../../state/courtier.selectors';

// Enregistrer les composants nécessaires pour le graphique
Chart.register(PieController, ArcElement, Tooltip, Legend);

@Component({
  selector: 'app-data-for-chart-pie',
  standalone: true,
  imports: [],
  templateUrl: './data-for-chart-pie.component.html',
  styleUrl: './data-for-chart-pie.component.css'
})
export class DataForChartPieComponent implements OnInit {

  pieChartData: { category: string; count: number }[] = [];

  constructor(private store: Store) { }

  ngOnInit(): void {
    // Charger les données du Pie Chart
    this.store.dispatch(loadPieChartData());

    // Sélectionner les données du Pie Chart depuis le store
    this.store.pipe(select(selectPieChartData)).subscribe(data => {
      this.pieChartData = data;
      this.createChart();
    });
  }

  createChart(): void {
    const pieChart = new Chart('pieChart', {
      type: 'pie',
      data: {
        labels: this.pieChartData.map(item => item.category),
        datasets: [{
          label: 'Product Categories',
          data: this.pieChartData.map(item => item.count),
          backgroundColor: ['#FF5733', '#33FF57', '#FF33A6', '#FFBD33'],
          hoverOffset: 4
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { position: 'top' },
          tooltip: {
            callbacks: {
              label: (tooltipItem) => `${tooltipItem.label}: ${tooltipItem.raw} units`
            }
          }
        }
      }
    });
  }

}
