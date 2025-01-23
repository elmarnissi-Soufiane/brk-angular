import { ServiceappService } from './services/serviceapp.service';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { fetchInitialData } from './store/app.actions';
import { selectAppState } from './store/app.selectors';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'app-br';

  constructor(private apiCheckService: ServiceappService, private store: Store) { }


  ngOnInit() {
    // Vérifier les points de terminaison au démarrage
    this.apiCheckService.checkAllEndpoints().subscribe((results) => {
      console.log('Résultats de la vérification des points de terminaison:', results);
      results.forEach(({ endpoint, isEmpty }) => {
        if (isEmpty) {
          console.log(`Endpoint ${endpoint} est vide. Action de récupération déclenchée.`);
          this.store.dispatch(fetchInitialData({ endpoint }));
        } else {
          console.log(`Endpoint ${endpoint} contient des données. Pas d'action nécessaire.`);
        }
      });
    });

    // Utiliser le sélecteur selectAppState pour observer l'état de l'application
    this.store.select(selectAppState).subscribe((state) => {
      console.log('État actuel des données:', state);
    });
  }

}
