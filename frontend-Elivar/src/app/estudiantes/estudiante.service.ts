import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Estudiante } from './estudiante';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {

  private url:string="http://localhost:8080/api/estudiantes";

  constructor(private http:HttpClient) { }

  //se crea la funcion para que retorne un objeto ede estudiantes
  //Obtener estudiantes
  getAll():Observable<Estudiante[]>{
    return this.http.get<Estudiante[]>(this.url);
  }

  //Crear estudiante
  create(estudiante:Estudiante):Observable<Estudiante>{
    return this.http.post<Estudiante>(this.url, estudiante)
  }

  get(id:number):Observable<Estudiante>{
    return this.http.get<Estudiante>(this.url + '/' + id);
  }

  update(estudiante:Estudiante):Observable<Estudiante>{
      return this.http.put<Estudiante>(this.url, estudiante)
  }

  delete(id:number):Observable<Estudiante>{
    return this.http.delete<Estudiante>(this.url + '/' + id);
  }

  
}
