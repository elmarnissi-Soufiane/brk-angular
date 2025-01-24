import { Component, OnInit } from '@angular/core';
import { Chart, CategoryScale, LinearScale, Title, Tooltip, Legend, LineElement, LineController, PointElement } from 'chart.js';

// Enregistrer les éléments nécessaires, y compris PointElement
Chart.register(CategoryScale, LinearScale, Title, Tooltip, Legend, LineElement, LineController, PointElement);

@Component({
  selector: 'app-data-for-chart-line',
  standalone: true,
  templateUrl: './data-for-chart-line.component.html',
  styleUrls: ['./data-for-chart-line.component.css']
})
export class DataForChartLineComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const lineChart = new Chart('lineChart', {
      type: 'line', // Type 'line' pour le graphique de ligne
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [{
          label: 'Sales Over Time',
          data: [65, 59, 80, 81, 56],
          fill: false,
          borderColor: '#42A5F5',
          tension: 0.1
        }]
      },
      options: {
        responsive: true,
        scales: {
          x: { title: { display: true, text: 'Months' } },
          y: { title: { display: true, text: 'Sales' } }
        }
      }
    });
  }
}
