import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login() {
    localStorage.setItem('token', 'lkasfjalsfjañsldflaksdfhaskdfjasdlfkjasdnvdakslhfioewhfsdaf')
  }

  getRandomBoolean(): boolean {
    return Math.random() >= 0.5;
  }

  logout() {
    localStorage.removeItem('token');
  }

  checkAuthentication() : boolean {

    const token = localStorage.getItem('token');

    if (token) return true;

    return false;
  }
}
