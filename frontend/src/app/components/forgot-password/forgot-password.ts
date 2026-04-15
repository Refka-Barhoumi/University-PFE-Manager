import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './forgot-password.html',
  styleUrl: './forgot-password.scss',
})
export class ForgotPasswordComponent {
  email = '';
  errorMessage = '';
  successMessage = '';
  loading = false;

  constructor(private authService: AuthService) {}

  onSubmit() {
    this.loading = true;
    this.errorMessage = '';
    this.successMessage = '';

    this.authService.forgotPassword(this.email).subscribe({
      next: () => {
        this.successMessage = 'Email de réinitialisation envoyé !';
        this.loading = false;
      },
      error: (err) => {
        this.errorMessage = err.error?.error || 'Erreur lors de l\'envoi';
        this.loading = false;
      }
    });
  }
}
