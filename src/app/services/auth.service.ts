import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { map, Observable, of } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseUrl: string = `${environment.rootUrl}/auth`;
  constructor(private http: HttpClient, private routes: Router) {}
  login(email: string, password: string) {
    return this.http
      .post<{ token: string }>(`${this.baseUrl}/login`, { email, password })
      .pipe(
        map((res) => {
          if (res.token) {
            localStorage.setItem('del_meetups_auth_token', res.token);
          }
          return null;
        })
      );
  }

  logout() {
    localStorage.removeItem('del_meetups_auth_token');
    this.routes.navigate(['login']);
  }
}
