import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environements/environments';
import { Observable } from 'rxjs';
import { Fournisseur } from '../../../models/Fournisseur/fournisseur';

@Injectable({
  providedIn: 'root'
})
export class FournisseurService {

  private apiUrl = `${environment.apiUrl}/fournisseurs`; // Utilisation de l'URL de l'environnement

  constructor(private http: HttpClient) { }

  // Récupérer la liste des fournisseurs
  getFournisseurs(): Observable<Fournisseur[]> {
    return this.http.get<Fournisseur[]>(this.apiUrl);
  }

  // Récupérer un fournisseur par son ID
  getFournisseurById(id: number): Observable<Fournisseur> {
    return this.http.get<Fournisseur>(`${this.apiUrl}/${id}`);
  }

  // Ajouter un fournisseur
  addFournisseur(fournisseur: Fournisseur): Observable<Fournisseur> {
    return this.http.post<Fournisseur>(this.apiUrl, fournisseur);
  }

  // Modifier un fournisseur
  updateFournisseur(fournisseur: Fournisseur): Observable<Fournisseur> {
    return this.http.put<Fournisseur>(`${this.apiUrl}/${fournisseur.id}`, fournisseur);
  }

  // Supprimer un fournisseur
  deleteFournisseur(id: number): Observable<void> {
    console.log(`Deleting fournisseur with id: ${id}`);
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

}
