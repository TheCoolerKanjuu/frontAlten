import {Component, inject} from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';
import {AuthService} from '../../services/auth/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  private authService = inject(AuthService);
  private router = inject(Router);

  logout() {
    this.authService.logout()
    this.router.navigateByUrl('/login');
  }
}
