import { Component } from '@angular/core';
import { DataForChartLineComponent } from './data-for-chart-line/data-for-chart-line.component';
import { DataForChartPieComponent } from './data-for-chart-pie/data-for-chart-pie.component';
import { OptionsForPieComponent } from './options-for-pie/options-for-pie.component';
import { OptionsForLineComponent } from './options-for-line/options-for-line.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-container-dashboard',
  standalone: true,
  imports: [
    DataForChartLineComponent,
    DataForChartPieComponent,
    OptionsForPieComponent,
    OptionsForLineComponent
  ],
  templateUrl: './container-dashboard.component.html',
  styleUrl: './container-dashboard.component.css'
})
export class ContainerDashboardComponent {

  isMenuVisible: boolean = true; // Par défaut, le menu est visible

  toggleMenu() {
    this.isMenuVisible = !this.isMenuVisible; // Alterne la visibilité du menu
  }
  constructor(private router: Router) { }

  goToProducts() {
    this.router.navigateByUrl('/product');
  }

  goToCategories() {
    this.router.navigateByUrl('/categorie');
  }

  goToFournisseurs() {
    this.router.navigateByUrl('fournisseur');
  }

  goToCommandes() {
    this.router.navigateByUrl('commande');
  }

}
