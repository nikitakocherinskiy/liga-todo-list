import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainDescriptionComponent } from '../main-page/main-description/main-description.component';
import { AuthLoginComponent } from '../auth/auth-login/auth-login.component';
import { IUser as User } from 'src/app/models';

const routes: Routes = [
  { path: 'login', component: AuthLoginComponent },
  { path: 'main', component: MainDescriptionComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
  parseJwt(token: string) {
    let base64Url = token.split('.')[1];
    let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    let jsonPayload = decodeURIComponent(
      window
        .atob(base64)
        .split('')
        .map(function (c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join('')
    );
    return JSON.parse(jsonPayload);
  }

  public get user(): User | null {
    const token = localStorage.getItem('del_meetups_auth_token');
    if (token) {
      const user: User = this.parseJwt(token);
      return user;
    } else return null;
  }

  public get token(): string | null {
    return localStorage.getItem('del_meetups_auth_token');
  }
}
