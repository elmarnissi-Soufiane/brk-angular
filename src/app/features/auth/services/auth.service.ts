import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, Observable, throwError } from 'rxjs';
import { User } from '../../../models/Auth/user';
import { environment } from '../../../environements/environments';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // private apiUrl = 'http://localhost:3000/users';
  private apiUrl = `${environment.apiUrl}/users`;

  private currentUserSubject: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null);
  public currentUser: Observable<User | null> = this.currentUserSubject.asObservable();

  constructor(private http: HttpClient) {
    // Vérifier si 'localStorage' est disponible dans l'environnement
    if (typeof localStorage !== 'undefined') {
      const storedUser = localStorage.getItem('currentUser');
      if (storedUser) {
        this.currentUserSubject.next(JSON.parse(storedUser));
      }
    }
  }

  // Login method
  login(email: string, password: string): Observable<User | null> {
    return this.http.get<User[]>(this.apiUrl).pipe(
      map((users) => {
        const user = users.find((u) => u.email === email && u.password === password);
        if (user) {
          if (typeof localStorage !== 'undefined') {
            localStorage.setItem('currentUser', JSON.stringify(user));
          }
          this.currentUserSubject.next(user);
          return user;
        }
        throw new Error('Invalid credentials');
      }),
      catchError((error) => {
        throw error;
      })
    );
  }

  // Register method (for example purposes, adds a new user to the "database")
  register(newUser: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, newUser).pipe(
      map((user) => {
        return user;
      }),
      catchError((error) => {
        throw error;
      })
    );
  }

  // Logout method
  logout(): void {
    if (typeof localStorage !== 'undefined') {
      localStorage.removeItem('currentUser');
    }
    this.currentUserSubject.next(null);
  }
}
