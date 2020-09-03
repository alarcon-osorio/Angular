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
  get():Observable<Estudiante>{
    return this.http.get<Estudiante>(this.url);
  }
  
}
