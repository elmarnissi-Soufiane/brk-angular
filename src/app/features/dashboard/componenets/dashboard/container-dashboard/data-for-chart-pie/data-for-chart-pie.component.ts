import { Component, OnInit } from '@angular/core';
import { Chart, PieController, ArcElement, Tooltip, Legend } from 'chart.js';

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

  constructor() { }

  ngOnInit(): void {
    const pieChart = new Chart('pieChart', {
      type: 'pie',
      data: {
        labels: ['Red', 'Blue', 'Yellow'],
        datasets: [{
          label: 'Color Distribution',
          data: [12, 19, 9],
          backgroundColor: ['#FF5733', '#33FF57', '#FF33A6'],
          hoverOffset: 4
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { position: 'top' },
          tooltip: {
            callbacks: {
              label: (tooltipItem) => tooltipItem.label + ': ' + tooltipItem.raw + ' units'
            }
          }
        }
      }
    });
  }

}
