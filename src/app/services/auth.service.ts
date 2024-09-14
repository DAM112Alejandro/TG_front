import { Injectable } from '@angular/core';
import { environment } from '../environments/env';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SESION } from '../environments/consts';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiServerUrl = environment.apiBaseUrl
 

  constructor(private http: HttpClient ) { }

  login(Username: any, Password: any): Observable<any> {    
    
    const body = new HttpParams()
    .set('username', Username)
    .set('password', Password);
    
    return this.http.post<any>(`${this.apiServerUrl}/auth/login`, body.toString(),
    { headers: { 'Content-Type': 'application/x-www-form-urlencoded' }});

  }

  register(User: any): Observable<any>{
    return this.http.post<any>(`${this.apiServerUrl}/auth/register`, User)
  }

  getCurrentUser(): Observable<any>{
    return this.http.get<any>(`${this.apiServerUrl}/auth/user`);
  }

  getToken(): string | null {
    const token = sessionStorage.getItem(SESION.TOKEN);
    return token ? JSON.parse(token) : null;
  }

  get isAuthenticated(): boolean {
    return !!sessionStorage.getItem(SESION.TOKEN);
  }

}
