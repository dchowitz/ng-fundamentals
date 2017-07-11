import { Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable()
export class AuthService {
  currentUser:User;

  loginUser(userName: string, password: string) {
    this.currentUser = {
      id: 1,
      firstName: 'John',
      lastName: 'Papa',
      userName: 'Jopa'
    };
  }

  isAuthenticated() {
    return !!this.currentUser;
  }
}