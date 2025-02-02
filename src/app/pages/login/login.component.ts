import {Component, inject} from '@angular/core';
import {AuthService} from '../../services/auth/auth.service';
import {Router} from '@angular/router';
import {HttpErrorResponse} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  private authService = inject(AuthService);
  private router = inject(Router);

  username = '';
  password = '';

  onSubmit() {
    this.authService.login(this.username, this.password).subscribe({
      next: () => {
        console.log('Logged in successfully');
        this.router.navigateByUrl('/products');
      },
      error: (error: HttpErrorResponse) => {
        console.error('Login failed', error);
      }
    });
  }
}
