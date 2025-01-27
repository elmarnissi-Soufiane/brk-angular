import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Fournisseur } from '../../../../models/Fournisseur/fournisseur';
import { Store } from '@ngrx/store';
import { FournisseurState } from '../../state/fournisseur.state';
import { addFournisseur, deleteFournisseur, loadFournisseurs, updateFournisseur } from '../../state/fournisseur.actions';
import { selectFournisseurs, selectFournisseursError, selectFournisseursLoading } from '../../state/fournissuer.selectors';
import { CommonModule } from '@angular/common';  // <-- Keep CommonModule
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { SidebarComponent } from "../../../../shared/sidebar/sidebar.component";
import { ModalsFournissuerComponent } from './modals-fournissuer/modals-fournissuer.component';
import { MatDialog } from '@angular/material/dialog';

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

  constructor(private store: Store<FournisseurState>, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.store.dispatch(loadFournisseurs());
    this.fournisseurs$ = this.store.select(selectFournisseurs).pipe(
      map((fournisseurs) => fournisseurs || [])
    );
    this.loading$ = this.store.select(selectFournisseursLoading);
    this.error$ = this.store.select(selectFournisseursError);
  }


  openModal(fournisseur?: Fournisseur): void {
    const dialogRef = this.dialog.open(ModalsFournissuerComponent, {
      width: '400px',
      data: fournisseur || { name: '' } // Vérifie que le fournisseur passé ici a un id
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('Résultat du modal:', result);  // Vérifie le résultat avant de procéder à l'action
      if (result) {
        if (fournisseur) {
          // Si un fournisseur existe, c'est une mise à jour
          this.store.dispatch(updateFournisseur({ fournisseur: result }));
        } else {
          // Sinon, c'est un ajout, assure-toi que l'objet a un id
          if (!result.id) {
            result.id = this.generateUniqueId();  // Ajoute un id généré si nécessaire
          }
          this.store.dispatch(addFournisseur({ fournisseur: result }));
        }
      }
    });
  }


  deleteFournisseur(fournisseur: Fournisseur): void {
    console.log('Fournisseur à supprimer:', fournisseur);  // Make sure this logs the correct fournisseur object.
    if (!fournisseur.id) {
      console.error('Le fournisseur n\'a pas d\'ID valide.');
      return;
    }
    const confirmDelete = window.confirm(`Voulez-vous vraiment supprimer le fournisseur ${fournisseur.name}?`);
    if (confirmDelete) {
      this.store.dispatch(deleteFournisseur({ id: fournisseur.id }));
    }
  }


  editFournisseur(fournisseur: Fournisseur): void {
    this.openModal(fournisseur);
  }

  addFournisseur(): void {
    this.openModal();
  }

  private generateUniqueId(): number {
    return Math.floor(Math.random() * 1000000); // Génère un ID unique aléatoire
  }

  // outside click handler
  outSide(): void {
    console.log('Outside click detected');
    this.dialog.closeAll(); // Close all open dialogs when clicking outside
  }

}
