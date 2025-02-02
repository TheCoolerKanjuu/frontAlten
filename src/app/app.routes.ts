import { Routes } from '@angular/router';
import {LoginComponent} from './pages/login/login.component';
import {ProductsComponent} from './pages/products/products.component';
import {AuthGuard} from './services/auth/auth.guard';
import {GuestGuard} from './services/auth/guest.guard';

export const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [GuestGuard]},
  { path: 'products', component: ProductsComponent, canActivate: [AuthGuard]},
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];
