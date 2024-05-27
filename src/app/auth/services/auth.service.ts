import { Injectable } from '@angular/core';
import { Observable, catchError, map, tap, throwError } from 'rxjs';
import { UserRegistrer } from '../interfaces/UserRegistrer.interface';
import { HttpClient } from '@angular/common/http';
import { environments } from '../../../environments/environments';
import { CompanyRegistrer } from '../interfaces/CompanyRegistrer.interface';
import { UserLogin } from '../interfaces/UserLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http : HttpClient,
  ) { }

  private readonly baseUrl = environments.baseUrlApi;

  createAccount( usuario : UserRegistrer ) : Observable<boolean> {
    return this.http.post<boolean>(`${ this.baseUrl }/api/usuario`, usuario)
      .pipe(
        tap( res => res ? true : false
        ),
        catchError( err => throwError( () => err))
      );
  }

  createCompanyAccount( empresa : CompanyRegistrer) : Observable<boolean> {
    return this.http.post<boolean>(`${ this.baseUrl }/api/empresa/grabar`, empresa)
      .pipe(
        tap( res => res ? true : false
        ),
        catchError( err => throwError( () => err))
      );
  }

  login(usuario : UserLogin): Observable<string> {

    return this.http.post<string>(`${ this.baseUrl }/api/authenticar`, usuario);

    // localStorage.setItem('token', 'lkasfjalsfjañsldflaksdfhaskdfjasdlfkjasdnvdakslhfioewhfsdaf')
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
