import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectCurrentUser, selectError, selectLoading } from '../../state/auth.selectors';
import { login } from '../../state/auth.actions';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

// Angular Material Imports
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'; // Import this module for mat-spinner
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,           // For Material Card
    MatFormFieldModule,      // For form fields
    MatInputModule,          // For input fields
    MatIconModule,           // For Material Icons
    MatButtonModule,         // For Material Buttons
    MatProgressSpinnerModule, // Add MatProgressSpinnerModule
    ReactiveFormsModule,     // For ReactiveForms
    // BrowserAnimationsModule  // Add BrowserAnimationsModule for animations
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  hidePassword: boolean = true; // Toggle visibility for password
  loading$: Observable<boolean>;
  error$: Observable<string | null>;

  constructor(private store: Store, private fb: FormBuilder) {
    // Select from the store
    this.loading$ = this.store.select(selectLoading);
    this.error$ = this.store.select(selectError);
  }

  ngOnInit(): void {
    // Initialize the login form with validation rules
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  // Dispatch login action on form submission
  // onSubmit(): void {
  //   if (this.loginForm.valid) {
  //     const { email, password } = this.loginForm.value;
  //     this.store.dispatch(login({ email, password }));
  //   }
  // }
  onSubmit(): void {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      // You can dispatch the login action here if needed
      this.store.dispatch(login({ email, password }));

      // Show a success alert when the form is valid
      alert('Login successful!');
    } else {
      // Optionally, show an alert if the form is invalid
      alert('Please fill out the form correctly!');
    }
  }



  // user$: Observable<any>; // Observable pour le user
  // loading$: Observable<boolean>; // Observable pour le chargement
  // error$: Observable<string | null>; // Observable pour l'erreur

  // constructor(private store: Store) {
  //   // Sélection des états depuis le store
  //   this.user$ = this.store.select(selectCurrentUser);
  //   this.loading$ = this.store.select(selectLoading);
  //   this.error$ = this.store.select(selectError);
  // }

  // ngOnInit() {
  //   // Déclenche l'action de connexion avec des informations d'identification factices
  //   this.store.dispatch(login({ email: 'test@example.com', password: 'password123' }));

  //   // S'abonner aux Observables et afficher les données dans la console
  //   this.user$.subscribe((user) => console.log('Current User:', user));
  //   this.loading$.subscribe((loading) => console.log('Loading:', loading));
  //   this.error$.subscribe((error) => console.log('Error:', error));
  // }

}
