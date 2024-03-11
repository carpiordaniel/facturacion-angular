import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../env/env';
import { ResponseData } from '../interface/interfaces';
@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private URL_API: string = environment.ApiUrl;

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get<any>(`${this.URL_API}/productos`);
  }

  enviarDatos(datos: any) {
    return this.http.post(`${this.URL_API}/productos/guardar`, datos);
  }

  eliminarPorId(id: number) {
    const url = `${this.URL_API}/productos/eliminar/${id}`;
    return this.http.delete(url);
  }

  actualizar(datos: any) {
    return this.http.put(`${this.URL_API}/productos/actualizar`, datos);
  }

  verificarExistencia(cod: string) {
    return this.http.get<ResponseData>(`${this.URL_API}/productos/verificar-cod-producto/${cod}`);
  }
  disminuirStock(detalles: any) {
    return this.http.post(`${this.URL_API}/productos/disminuir-stock`, detalles);
  }

}
