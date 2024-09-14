import { Injectable } from '@angular/core';
import { environment } from '../environments/env';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 


  private apiServerUrl = environment.apiBaseUrl

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any>{
    return this.http.get(`${this.apiServerUrl}/usuario`);
  }  
  deleteUser(userId: string): Observable<any>{
    return this.http.delete(`${this.apiServerUrl}/usuario/delete/${userId}`);
  }

  updateUser(user: any): Observable<any> {console.log(user);
    return this.http.put(`${this.apiServerUrl}/usuario/update`, user);
    
    
  }
  
  getUserById(id: any) {
    return this.http.get(`${this.apiServerUrl}/usuario/${id}`);
  }

  getTipoUser(name: string): Observable<any> {
    return this.http.get(`${this.apiServerUrl}/tipoUsuario/desc/${name}`);
  }

  getTipoSub(name: string): Observable<any> {
    return this.http.get(`${this.apiServerUrl}/tipoSub/desc/${name}`)
  }
  


}
