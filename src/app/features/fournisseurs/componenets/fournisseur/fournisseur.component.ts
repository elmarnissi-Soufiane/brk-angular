import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Fournisseur } from '../../../../models/Fournisseur/fournisseur';
import { Store } from '@ngrx/store';
import { FournisseurState } from '../../state/fournisseur.state';
import { loadFournisseurs } from '../../state/fournisseur.actions';
import { selectFournisseurs, selectFournisseursError, selectFournisseursLoading } from '../../state/fournissuer.selectors';
import { CommonModule } from '@angular/common';  // <-- Keep CommonModule
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { SidebarComponent } from "../../../../shared/sidebar/sidebar.component";

@Component({
  selector: 'app-fournisseur',
  standalone: true,
  imports: [
    CommonModule, // <-- Keep CommonModule
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    SidebarComponent
  ],
  templateUrl: './fournisseur.component.html',
  styleUrls: ['./fournisseur.component.css']
})
export class FournisseurComponent implements OnInit {

  fournisseurs$: Observable<Fournisseur[]> | undefined;
  loading$: Observable<boolean> | undefined;
  error$: Observable<string | null> | undefined;
  displayedColumns: string[] = ['id', 'name', 'actions'];

  constructor(private store: Store<FournisseurState>) { }

  ngOnInit(): void {
    this.store.dispatch(loadFournisseurs());
    this.fournisseurs$ = this.store.select(selectFournisseurs);
    this.loading$ = this.store.select(selectFournisseursLoading);
    this.error$ = this.store.select(selectFournisseursError);
  }

  editFournisseur(fournisseur: Fournisseur): void {
    console.log('Edit fournisseur:', fournisseur);
    // Implement your edit logic here
  }

  deleteFournisseur(fournisseur: Fournisseur): void {
    console.log('Delete fournisseur:', fournisseur);
    // Implement your delete logic here
  }

  // fournisseurs$: Observable<Fournisseur[]> | undefined;
  // loading$: Observable<boolean> | undefined;
  // error$: Observable<string | null> | undefined;

  // constructor(private store: Store<FournisseurState>) { }

  // ngOnInit(): void {
  //   // Dispatch l'action pour charger les fournisseurs
  //   this.store.dispatch(loadFournisseurs());

  //   // Sélectionne les données des fournisseurs, l'état de chargement et les erreurs
  //   this.fournisseurs$ = this.store.select(selectFournisseurs);
  //   this.loading$ = this.store.select(selectFournisseursLoading);
  //   this.error$ = this.store.select(selectFournisseursError);

  //   // Affiche les données dans la console
  //   this.fournisseurs$.subscribe((fournisseurs) =>
  //     console.log('Fournisseurs récupérés:', fournisseurs)
  //   );
  // }

}
