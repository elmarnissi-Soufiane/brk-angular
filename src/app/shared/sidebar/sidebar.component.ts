import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

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
