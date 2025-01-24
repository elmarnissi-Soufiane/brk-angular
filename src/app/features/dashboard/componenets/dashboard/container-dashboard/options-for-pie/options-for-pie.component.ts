import { Component } from '@angular/core';

import { Chart, DoughnutController, ArcElement, Tooltip, Legend } from 'chart.js';

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

  constructor() { }

  ngOnInit(): void {
    const doughnutChart = new Chart('doughnutChart', {
      type: 'doughnut',
      data: {
        labels: ['Marketing', 'Sales', 'Development'],
        datasets: [{
          label: 'Budget Allocation',
          data: [50, 30, 20],
          backgroundColor: ['#FFB74D', '#4CAF50', '#42A5F5'],
          hoverOffset: 4
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { position: 'top' },
          tooltip: {
            callbacks: {
              label: (tooltipItem) => tooltipItem.label + ': ' + tooltipItem.raw + ' USD'
            }
          }
        }
      }
    });
  }

}
