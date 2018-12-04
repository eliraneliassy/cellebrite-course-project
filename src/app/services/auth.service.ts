import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface User {
  userName: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user: BehaviorSubject<User> = new BehaviorSubject(null);
  constructor() { }

  login(email: string, password: string) {
    // TODO: add server call to check auth status
    const newUser: User = {
      userName: 'USERNAME',
      email: email
    };

    this.user.next(newUser);
  }

  getUser(): Observable<User> {
    return this.user.asObservable();
  }


  logout() {
    this.user.next(null);
  }
}
