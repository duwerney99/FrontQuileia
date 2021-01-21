import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Conexiones } from './conexiones';
import { Dispositivo } from './dispositivo';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }


  guardarDispositivo(dispositivo: Dispositivo): Observable<Dispositivo> {
    return this.http.post('http://localhost:8080/dispositivos/guardar', dispositivo);
  }


  eliminarDispositivo(dispositivoId: number): Observable<any> {
    return this.http.post('http://localhost:8080/dispositivos/eliminar', dispositivoId);
  }

  listarDispositivo(): Observable<any> {
    return this.http.get('http://localhost:8080/dispositivos/listar');
  }

  actualizarDispositivo(dispositivo: Dispositivo): Observable<Dispositivo> {
    return this.http.put('http://localhost:8080/dispositivos/actualizar', dispositivo);
  }

  //CONEXIONES

  guardarConexion(conexiones: Conexiones): Observable<Conexiones> {
    return this.http.post('http://localhost:8080/conexiones/guardar', conexiones);
  }

  eliminarConexiones(id: number): Observable<any> {
    return this.http.post('http://localhost:8080/conexiones/eliminar', id);
  }

  listarConexiones(): Observable<any> {
    return this.http.get('http://localhost:8080/conexiones/listar');
  }

  actualizarConexion(conexiones: Conexiones): Observable<Conexiones> {
    return this.http.post('http://localhost:8080/conexiones/actualizar', conexiones);
  }
}