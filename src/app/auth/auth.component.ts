import { Component, signal } from '@angular/core';
import { AuthModule } from '@angular/fire/auth';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    AuthModule,
  ],
  template: `<form [formGroup]="authForm">
    <mat-form-field>
      <mat-label>Email</mat-label>
      <input matInput type="email" formControlName="email" />
    </mat-form-field>

    <mat-form-field>
      <mat-label>Password</mat-label>
      <input matInput type="password" formControlName="password" />
    </mat-form-field>

    <mat-form-field>
      <mat-label>Repeat Password</mat-label>
      <input matInput type="password" formControlName="repeatedPassword" />
    </mat-form-field>

    <div class="login-buttons">
      <button mat-raised-button color="secondary">Login</button>

      <button
        mat-raised-button
        color="accent"
        (click)="loginViaGoogleAccount()"
      >
        Login via Google account
      </button>
    </div>
  </form>`,
  styleUrl: './auth.component.scss',
})
export class AuthComponent {
  public isSignIn = signal(false);

  authForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    repeatedPassword: new FormControl(''),
  });

  constructor(private readonly authService: AuthService) {}

  public loginViaGoogleAccount(): void {
    this.authService.loginViaGoogleAccount();
  }

  public loginViaEmail(): void {
    this.authService.loginViaEmail({
      email: this.authForm.get('email')!.value!,
      password: this.authForm.get('password')!.value!,
    });
  }

  public resetPassword(): void {
    this.authService.resetPassword({
      email: this.authForm.get('email')!.value!,
    });
  }

  public loginInWithEmail(): void {
    if (!this.authForm.valid) return;

    this.authService.loginViaEmail({
      email: this.authForm.get('email')!.value!,
      password: this.authForm.get('password')!.value!,
    });
  }

  public signInWithEmail(): void {
    if (!this.authForm.valid) return;

    this.authService.signInWithEmail({
      email: this.authForm.get('email')!.value!,
      password: this.authForm.get('password')!.value!,
    });
  }
}
