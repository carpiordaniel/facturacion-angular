import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../env/env';
@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  private URL_API: string = environment.ApiUrl;

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get<any>(`${this.URL_API}/clientes`);
  }

  enviarDatos(datos: any) {
    return this.http.post(`${this.URL_API}/clientes/guardar`, datos);
  }

  eliminarPorId(id: number) {
    const url = `${this.URL_API}/clientes/eliminar/${id}`;
    return this.http.delete(url);
  }

  actualizar(datos: any) {
    return this.http.put(`${this.URL_API}/clientes/actualizar`, datos);
  }

}
