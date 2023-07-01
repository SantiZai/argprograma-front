import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { AuthDataService } from 'src/app/shared/auth-data.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  username: string = ''
  password: string = ''

  constructor(private authDataService: AuthDataService, private authService: AuthService) { }

  login() {
    this.authDataService.setCredentials(this.username, this.password)
    this.authService.login()
  }
}
