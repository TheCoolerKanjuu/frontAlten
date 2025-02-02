import {inject} from '@angular/core';
import {AuthService} from './auth.service';
import {Router} from '@angular/router';

export const GuestGuard = () => {
  const auth = inject(AuthService);
  const router = inject(Router);

  if(auth.isConnected()) {
    router.navigateByUrl('/products')
    return false
  }
  return true
}
