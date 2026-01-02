import { Routes } from '@angular/router';

export const routes: Routes = [{
    path: 'login',
    loadComponent: () =>
      import('./frontend/core/components/login/login.component').then(
        (c) => c.LoginComponent
      ),
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./frontend/core/components/register/register.component').then(
        (c) => c.RegisterComponent
      ),
  },];
