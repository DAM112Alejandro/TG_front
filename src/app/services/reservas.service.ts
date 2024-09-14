import { Injectable } from '@angular/core';
import { environment } from '../environments/env';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservasService {

  private apiServerUrl = environment.apiBaseUrl

  constructor(private http: HttpClient) { }

  addReserva(reservas: any): Observable<any> {
    return this.http.post(`${this.apiServerUrl}/reserva/add`, reservas);
  }

  getReservaByUser(user: any): Observable<any> { 
    return this.http.get(`${this.apiServerUrl}/reserva/usuario/${user}`);
  }

  deleteReserva(id: string): Observable<any> {
    return this.http.delete(`${this.apiServerUrl}/reserva/delete/${id}`);
  }
}
