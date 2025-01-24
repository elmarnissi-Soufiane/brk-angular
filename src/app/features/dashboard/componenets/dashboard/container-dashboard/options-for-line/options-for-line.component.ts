import { Component, OnInit } from '@angular/core';

import { Chart, BarController, CategoryScale, LinearScale, Title, Tooltip, Legend, BarElement } from 'chart.js';

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

  constructor() { }

  ngOnInit(): void {
    const barChart = new Chart('barChart', {
      type: 'bar',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [{
          label: 'Revenue',
          data: [12, 19, 3, 5, 2],
          backgroundColor: '#42A5F5',
          borderColor: '#1E88E5',
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        scales: {
          x: { title: { display: true, text: 'Months' } },
          y: { title: { display: true, text: 'Revenue' }, beginAtZero: true }
        }
      }
    });
  }

}
