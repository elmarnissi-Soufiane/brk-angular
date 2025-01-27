import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Ajout pour async pipe
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from '../../../models/Auth/user';
import { selectCurrentUser } from '../../../features/auth/state/auth.selectors';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logo-profile-courtier',
  standalone: true,
  imports: [CommonModule], // Ajout de CommonModule
  templateUrl: './logo-profile-courtier.component.html',
  styleUrls: ['./logo-profile-courtier.component.css'],
})
export class LogoProfileCourtierComponent {
  currentUser$: Observable<User | null>; // Observable pour suivre l'utilisateur

  constructor(private store: Store, private router: Router) {
    this.currentUser$ = this.store.select(selectCurrentUser); // Sélectionner l'utilisateur courant du store
  }

  onMenuSelect(event: Event): void {
    const value = (event.target as HTMLSelectElement).value;
    if (value === 'logout') {
      // Implémentez l'action de déconnexion ici
      console.log('Déconnexion');
      this.router.navigateByUrl('/login');

    } else if (value === 'profile') {
      // Implémentez l'action pour afficher le profil ici
      console.log('Redirection vers le profil');
    }
  }
}
