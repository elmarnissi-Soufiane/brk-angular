import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Chart, CategoryScale, LinearScale, Title, Tooltip, Legend, LineElement, LineController, PointElement } from 'chart.js';
import { Observable } from 'rxjs';
import { selectLineChartData } from '../../../../state/courtier.selectors';
import { loadLineChartData } from '../../../../state/courtier.actions';

// Enregistrer les éléments nécessaires, y compris PointElement
Chart.register(CategoryScale, LinearScale, Title, Tooltip, Legend, LineElement, LineController, PointElement);

@Component({
  selector: 'app-data-for-chart-line',
  standalone: true,
  templateUrl: './data-for-chart-line.component.html',
  styleUrls: ['./data-for-chart-line.component.css']
})
export class DataForChartLineComponent implements OnInit {

  lineChartData$: Observable<{ month: string; count: number }[]>; // Observable pour les données du graphique

  constructor(private store: Store) {
    // Sélection des données depuis le store
    this.lineChartData$ = this.store.select(selectLineChartData);
  }

  ngOnInit(): void {
    // Chargement des données via NgRx (action dispatchée)
    this.store.dispatch(loadLineChartData());

    // Abonnement aux données pour générer le graphique
    this.lineChartData$.subscribe((data) => {
      this.renderChart(data);
    });
  }

  /**
   * Méthode pour initialiser et rendre le graphique
   */
  private renderChart(data: { month: string; count: number }[]): void {
    const labels = data.map((item) => item.month);
    const counts = data.map((item) => item.count);

    new Chart('lineChart', {
      type: 'line',
      data: {
        labels,
        datasets: [
          {
            label: 'Commandes par Mois',
            data: counts,
            fill: false,
            borderColor: '#42A5F5',
            tension: 0.1,
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          x: { title: { display: true, text: 'Mois' } },
          y: { title: { display: true, text: 'Commandes' } },
        },
      },
    });
  }
}
