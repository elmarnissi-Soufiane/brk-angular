import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Fournisseur } from '../../../../models/Fournisseur/fournisseur';
import { Store } from '@ngrx/store';
import { FournisseurState } from '../../state/fournisseur.state';
import { loadFournisseurs } from '../../state/fournisseur.actions';
import { selectFournisseurs, selectFournisseursError, selectFournisseursLoading } from '../../state/fournissuer.selectors';

@Component({
  selector: 'app-fournisseur',
  standalone: true,
  imports: [],
  templateUrl: './fournisseur.component.html',
  styleUrl: './fournisseur.component.css'
})
export class FournisseurComponent implements OnInit {

  fournisseurs$: Observable<Fournisseur[]> | undefined;
  loading$: Observable<boolean> | undefined;
  error$: Observable<string | null> | undefined;

  constructor(private store: Store<FournisseurState>) { }

  ngOnInit(): void {
    // Dispatch l'action pour charger les fournisseurs
    this.store.dispatch(loadFournisseurs());

    // Sélectionne les données des fournisseurs, l'état de chargement et les erreurs
    this.fournisseurs$ = this.store.select(selectFournisseurs);
    this.loading$ = this.store.select(selectFournisseursLoading);
    this.error$ = this.store.select(selectFournisseursError);

    // Affiche les données dans la console
    this.fournisseurs$.subscribe((fournisseurs) =>
      console.log('Fournisseurs récupérés:', fournisseurs)
    );
  }

}
