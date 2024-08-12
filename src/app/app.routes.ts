import { AuthGuard, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { Routes } from '@angular/router';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['auth']);

export const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    loadComponent: () =>
      import('./dashboard/dashboard.component').then(
        (c) => c.DashboardComponent,
      ),
    data: { authGuardPipe: redirectUnauthorizedToLogin },
  },
  {
    path: 'auth',
    loadComponent: () =>
      import('./auth/auth.component').then((c) => c.AuthComponent),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
