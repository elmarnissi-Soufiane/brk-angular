import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectCurrentUser, selectError, selectLoading } from '../../state/auth.selectors';
import { login } from '../../state/auth.actions';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  user$: Observable<any>; // Observable pour le user
  loading$: Observable<boolean>; // Observable pour le chargement
  error$: Observable<string | null>; // Observable pour l'erreur

  constructor(private store: Store) {
    // Sélection des états depuis le store
    this.user$ = this.store.select(selectCurrentUser);
    this.loading$ = this.store.select(selectLoading);
    this.error$ = this.store.select(selectError);
  }

  ngOnInit() {
    // Déclenche l'action de connexion avec des informations d'identification factices
    this.store.dispatch(login({ email: 'test@example.com', password: 'password123' }));

    // S'abonner aux Observables et afficher les données dans la console
    this.user$.subscribe((user) => console.log('Current User:', user));
    this.loading$.subscribe((loading) => console.log('Loading:', loading));
    this.error$.subscribe((error) => console.log('Error:', error));
  }

}
