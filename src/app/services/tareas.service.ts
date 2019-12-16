import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tareas } from '../models/tareas';

@Injectable({
  providedIn: 'root'
})
export class TareasService {


  selectedTarea: Tareas;
  tareas: Tareas[];
  readonly URL_API = 'http://localhost:9000/api/tareas';

  constructor( private http: HttpClient) {
    this.selectedTarea = new Tareas();
  }

  getTareas(proyecto) {
    return this.http.get(this.URL_API + `/${proyecto}`);
  }

  postTarea(proyecto, tareas: Tareas) {
    return this.http.post(this.URL_API + `/${proyecto}`, tareas);
  }

  putTarea(tareas: Tareas) {
    return this.http.put(this.URL_API + `/${tareas._id}`, tareas);
  }

  deleteTarea(_id: string) {
    return this.http.delete(this.URL_API + `/${_id}`);
  }
}
