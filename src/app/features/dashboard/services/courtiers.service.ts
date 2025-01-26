import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environements/environments';
import { HttpClient } from '@angular/common/http';
import { Product } from '../../../models/Product/product'; // Interface Product
import { Commande } from '../../../models/Commande/commande'; // Interface Commande
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CourtiersService {

  private apiUrl = environment.apiUrl; // Utilisation de l'URL définie dans environment.ts

  constructor(private http: HttpClient) { }

  /**
   * Récupérer les données pour le Line Chart (Commandes par mois)
   */
  getLineChartData(): Observable<{ month: string; count: number }[]> {
    return this.http.get<Commande[]>(`${this.apiUrl}/commandes`).pipe(
      map((commandes: Commande[]) => {
        const result: { month: string; count: number }[] = [];
        commandes.forEach((commande: Commande) => {
          const month = new Date(commande.date).toLocaleString('default', { month: 'short' });
          const existingMonth = result.find((item) => item.month === month);
          if (existingMonth) {
            existingMonth.count++;
          } else {
            result.push({ month, count: 1 });
          }
        });
        return result;
      })
    );
  }

  /**
   * Récupérer les données pour le Pie Chart (Produits par catégorie)
   */
  getPieChartData(): Observable<{ category: string; count: number }[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/products`).pipe(
      map((products: Product[]) => {
        const result: { category: string; count: number }[] = [];
        products.forEach((product: Product) => {
          const category = String(product.categoryId);
          const existingCategory = result.find((item) => item.category === category);
          if (existingCategory) {
            existingCategory.count++;
          } else {
            result.push({ category, count: 1 });
          }
        });
        return result;
      })
    );
  }

  /**
   * Récupérer les données pour le Bar Chart (Commandes par fournisseur)
   */
  getBarChartData(): Observable<{ supplier: string; count: number }[]> {
    return this.http.get<Commande[]>(`${this.apiUrl}/commandes`).pipe(
      map((commandes: Commande[]) => {
        const result: { supplier: string; count: number }[] = [];
        commandes.forEach((commande: Commande) => {
          const supplier = String(commande.supplierId);
          const existingSupplier = result.find((item) => item.supplier === supplier);
          if (existingSupplier) {
            existingSupplier.count++;
          } else {
            result.push({ supplier, count: 1 });
          }
        });
        return result;
      })
    );
  }

  /**
   * Récupérer les données pour le Doughnut Chart (Types de commandes)
   */
  getDoughnutChartData(): Observable<{ type: string; count: number }[]> {
    return this.http.get<Commande[]>(`${this.apiUrl}/commandes`).pipe(
      map((commandes: Commande[]) => {
        const result: { type: string; count: number }[] = [];
        commandes.forEach((commande: Commande) => {
          const type = commande.type;
          const existingType = result.find((item) => item.type === type);
          if (existingType) {
            existingType.count++;
          } else {
            result.push({ type, count: 1 });
          }
        });
        return result;
      })
    );
  }

}
