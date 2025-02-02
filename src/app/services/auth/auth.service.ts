import {computed, inject, Injectable, signal} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, pipe, tap} from 'rxjs';
import {User} from '../../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private http = inject(HttpClient)
  private _currentUser = signal<User | null>(null);
  currentUser = this._currentUser.asReadonly()
  isConnected = computed(() => this.currentUser() !== null);


  login(email: string, password: string): Observable<{
    user: User
  }> {
    return this.http.post<{
      user: User
    }>('http://localhost:5207/Authentication/token', { email, password }, { withCredentials: true })
      .pipe(
        tap(response => {
          this._currentUser.set(response.user);
        })
      );
  }

  revokeToken(): Observable<any> {
    return this.http.post<any>('/api/revoke-token', {}, { withCredentials: true })
      .pipe(
        tap(response => {
          console.log('Tokens refreshed successfully');
        })
      );
  }

  logout() {
    this._currentUser.set(null);
    console.log(this.isConnected());
  }
}
