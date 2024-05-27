import { inject } from '@angular/core';
import { CanActivateFn, GuardsCheckEnd, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {

  const authService = inject(AuthService);

  const router = inject(Router);

  const isAuthenticated = authService.checkAuthentication();

  if ( isAuthenticated ) return true;

  return router.createUrlTree(['/auth/login']);
};

export const publicGuard: CanActivateFn = (route, state) => {

  const authService = inject(AuthService);

  const router = inject(Router);

  const isAuthenticated = authService.checkAuthentication();

  if ( !isAuthenticated ) return true;

  return router.createUrlTree(['/guia-vocacional/']);
}
