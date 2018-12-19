//Exercício Template Drive

import { Component, OnInit } from '@angular/core';

class Dados {
  constructor(public titulo: string,
  public descricao: string) { }
}

class Curso {
  static newCurso (codigo: number,titulo: string, descricao: string){
    return new Curso (codigo, new Dados (titulo,descricao));
  }

  private constructor(public codigo: number,
    public dados: Dados) { }  
}

@Component({
  selector: 'app-tdform',
  templateUrl: './tdform.component.html',
  styleUrls: ['./tdform.component.css']
})
export class TDFormComponent implements OnInit {

  // codigo: number = 100;
  // titulo: string = "Angular";
  // descricao: string = "Curso de Angular";
  //curso = new Curso(100, new Dados('Angular', 'Curso de TS e Angular'));
  curso = Curso.newCurso (100, 'Angular', 'Curso de TS e Angular alterado');

  constructor() { }

  ngOnInit() {
  }

  onSubmit (value: any){
    console.log (value);
  }

}
