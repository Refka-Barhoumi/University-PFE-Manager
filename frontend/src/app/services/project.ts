import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private apiUrl = 'http://localhost:8080/projects';

  constructor(private http: HttpClient, private authService: AuthService) {}

  // Récupérer les headers avec token
  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Authorization': `Bearer ${this.authService.getToken()}`
    });
  }

  // Récupérer les projets d'un étudiant
  getProjectsByStudent(studentId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/student/${studentId}`, {
      headers: this.getHeaders()
    });
  }

  // Ajouter un projet
  addProject(project: any): Observable<any> {
    return this.http.post(this.apiUrl, project, {
      headers: this.getHeaders()
    });
  }

  // Modifier un projet
  updateProject(id: number, project: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, project, {
      headers: this.getHeaders()
    });
  }

  // Supprimer un projet
  deleteProject(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`, {
      headers: this.getHeaders()
    });
  }
}