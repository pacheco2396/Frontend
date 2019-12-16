import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Proyectos } from '../models/proyectos';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  selectedProyecto: Proyectos;
  proyectos: Proyectos[];
  readonly URL_API = 'http://localhost:9000/api/proyectos';

  constructor( private http: HttpClient) {
    this.selectedProyecto = new Proyectos();
  }

  getProyectos(usuario) {
    return this.http.get(this.URL_API + '/users/' + usuario);
  }

  postProyecto(Proyecto: Proyectos, usuario) {
    return this.http.post(this.URL_API + '/' + usuario, Proyecto);
  }

  putProyecto(Proyecto: Proyectos) {
    return this.http.put(this.URL_API + `/${Proyecto._id}`, Proyecto);
  }

  deleteProyecto(_id: string) {
    return this.http.delete(this.URL_API + `/${_id}`);
  }
}
