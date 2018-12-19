import { Injectable } from '@angular/core';
import {Curso} from '../model/curso'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, delay } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CursosService {

  // cursos: Curso[];

  getBaseUrl(): string {
    return 'http://localhost:3000/api/cursos';
  }

  constructor(private http: HttpClient) {
    // this.cursos = [
    //   new Curso (1,'TS e Angular'),
    //   new Curso (2,'Javascript e JSON'),
    //   new Curso (3,'Java'),
    //   new Curso (4,'Gradle'),
    //   new Curso (5,'Ionic')
    // ];
   }

  listar(): Observable<Curso[]> {
    return this.http.get<Curso[]> (this.getBaseUrl());

    //return this.http.get<Curso[]> ('assets/cursos.json');
  }

  buscar(id: string): Observable<Curso> {
    return this.http.get<Curso> (this.getBaseUrl()+'/'+id);

    //return this.http.get<Curso[]> ('assets/cursos.json');
  }


  // listarDescricao(): Observable<string[]> {
  //   return this.http.get<Curso[]> ('assets/cursos.json').pipe( 
  //     delay(3000),
  //     map (cursos => cursos.
  //       map(c => c.descricao))
  //    ); 
  // }



}
