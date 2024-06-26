import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const endpoint = 'http://localhost:3000/api/auth/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(email: string, password:string): Observable<AuthRestModelResponse>{
    return this.http.post<AuthRestModelResponse>(endpoint+"login", new LoginModel( email, password));
  }


  logout() {
    localStorage.removeItem('currentUser');
  }

  register(username: string, password: string) :  Observable<AuthRestModelResponse>{
      return this.http.post<any>(endpoint+"register", new LoginModel( username, password))
  }
}

export interface AuthRestModelResponse{

}

export class LoginModel{

  constructor(public email:string, public password:string){}

}
