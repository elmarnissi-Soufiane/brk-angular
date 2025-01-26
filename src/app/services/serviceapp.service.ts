import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, forkJoin, map, of } from 'rxjs';
import { environment } from '../environements/environments';

@Injectable({
  providedIn: 'root'
})
export class ServiceappService {

  // like there check all endpoints i have
  private endpoints = ['/users', '/products', '/categories', '/fournisseurs', '/commandes'];

  constructor(private http: HttpClient) { }

  // checkAllEndpoints() {
  //   return forkJoin(
  //     this.endpoints.map((endpoint) =>
  //       this.http.get<any[]>(`http://localhost:3000${endpoint}`).pipe(
  //         map((data) => ({ endpoint, isEmpty: data.length === 0 })),
  //         catchError(() =>
  //           of({ endpoint, isEmpty: true }) // Assume empty if the request fails
  //         )
  //       )
  //     )
  //   );
  // }

  // Méthode pour vérifier tous les endpoints
  checkAllEndpoints() {
    return forkJoin(
      this.endpoints.map((endpoint) =>
        this.http.get<any[]>(`${environment.apiUrl}${endpoint}`).pipe(
          map((data) => ({ endpoint, isEmpty: data.length === 0 })),
          catchError(() =>
            of({ endpoint, isEmpty: true }) // Considérer vide en cas d'erreur
          )
        )
      )
    );
  }

}
