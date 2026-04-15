import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';
import { ProjectService } from '../../services/project';

@Component({
  selector: 'app-project-form',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './project-form.html',
  styleUrl: './project-form.scss',
})
export class ProjectFormComponent implements OnInit {
  project: any = {
    title: '',
    description: '',
    objectives: '',
    technologies: '',
    participationType: 'Seul',
    projectContext: 'Academique',
    companyName: '',
    companySupervisor: '',
    student2: null,
  };

  student2Id: number | null = null;
  errorMessage = '';
  successMessage = '';
  loading = false;
  isEditMode = false;
  projectId: number | null = null;

  constructor(
    private projectService: ProjectService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.projectId = this.route.snapshot.queryParams['id'] || null;
    if (this.projectId) {
      this.isEditMode = true;
    }
  }

  onSubmit() {
    this.loading = true;
    this.errorMessage = '';
    this.successMessage = '';

    const studentId = Number(localStorage.getItem('studentId'));
    const payload = {
      ...this.project,
      student: { id: studentId },
      student2:
        this.project.participationType === 'Binôme' && this.student2Id
          ? { id: this.student2Id }
          : null,
    };

    if (this.isEditMode && this.projectId) {
      this.projectService.updateProject(this.projectId, payload).subscribe({
        next: () => {
          this.successMessage = 'Projet mis à jour avec succès !';
          this.loading = false;
          setTimeout(() => this.router.navigate(['/dashboard']), 2000);
        },
        error: (err) => {
          this.errorMessage = err.error?.error || 'Erreur lors de la mise à jour';
          this.loading = false;
        },
      });
    } else {
      this.projectService.addProject(payload).subscribe({
        next: () => {
          this.successMessage = 'Projet soumis avec succès !';
          this.loading = false;
          setTimeout(() => this.router.navigate(['/dashboard']), 2000);
        },
        error: (err) => {
          this.errorMessage = err.error?.error || 'Erreur lors de la soumission';
          this.loading = false;
        },
      });
    }
  }
}
