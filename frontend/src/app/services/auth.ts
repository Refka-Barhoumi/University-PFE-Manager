import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:8080/auth';

  constructor(private http: HttpClient) {}

  // Inscription
  register(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, data);
  }

  // Connexion
  login(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, data);
  }

  // Demande réinitialisation mot de passe
  forgotPassword(email: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/forgot-password`, { email });
  }

  // Réinitialisation mot de passe
  resetPassword(token: string, newPassword: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/reset-password`, { token, newPassword });
  }

  // Sauvegarder token dans localStorage
  saveToken(token: string): void {
    localStorage.setItem('token', token);
  }

  // Récupérer token
  getToken(): string | null {
    return localStorage.getItem('token');
  }

  // Déconnexion
  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('studentId');
    localStorage.removeItem('fullName');
  }

  // Vérifier si connecté
  isLoggedIn(): boolean {
    return !!this.getToken();
  }
}