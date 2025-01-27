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

}
