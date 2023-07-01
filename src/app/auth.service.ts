import { Injectable } from '@angular/core';
import { AuthDataService } from './shared/auth-data.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn: boolean = true

  admin: string = 'admin'
  pass: string = 'pass'

  constructor(private authDataService: AuthDataService) {}

  login() {
    const { username, password } = this.authDataService.getCredentials()
    if (username === this.admin && password === this.pass) {
      this.isLoggedIn = true
    }
  }
}
