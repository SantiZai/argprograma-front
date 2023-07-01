import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthDataService {
  username: string = ''
  password: string = ''

  setCredentials(username: string, password: string) {
    this.username = username
    this.password = password
  }

  getCredentials(): { username: string, password: string } {
    return { username: this.username, password: this.password }
  }
}
