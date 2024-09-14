import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/env';

@Injectable({
  providedIn: 'root'
})
export class ClaseService {

  private apiServerUrl = environment.apiBaseUrl

  constructor(private http: HttpClient) { }

  getClases() {
    return this.http.get<any[]>(`${this.apiServerUrl}/clases`);
  }
  getClasesById(id: string){
    return this.http.get<any>(`${this.apiServerUrl}/clases/${id}`);
  }
  


}
