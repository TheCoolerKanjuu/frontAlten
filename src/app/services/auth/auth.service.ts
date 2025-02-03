import {computed, inject, Injectable, signal} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, tap} from 'rxjs';
import {Token} from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private http = inject(HttpClient)
  private _currentToken = signal<Token | null>(null);
  currentToken = this._currentToken.asReadonly()
  isConnected = computed(() => this.currentToken() !== null);


  login(email: string, password: string): Observable<{
    token: Token
  }> {
    return this.http.post<{
      token: Token
    }>('http://localhost:5207/Authentication/token', { email, password }, { withCredentials: true })
      .pipe(
        tap(response => {
          this._currentToken.set(response.token);
        })
      );
  }

  revokeToken(): Observable<any> {
    return this.http.post<any>('/api/revoke-token', {}, { withCredentials: true })
      .pipe(
        tap(response => {
          console.log('Tokens refreshed successfully'); // Not Implemented yet
        })
      );
  }

  logout() {
    this._currentToken.set(null);
    console.log(this.isConnected());
  }
}
