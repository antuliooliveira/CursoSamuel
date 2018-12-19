import { Component, OnInit } from '@angular/core';
import { CursosService } from '../shared/services/cursos.service';
import { Curso } from '../shared/model/curso';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  cursos: Curso[];
  cursosDescricao: string [];

  constructor(private cursosService: CursosService) { }

  ngOnInit() {
    this.cursosService.listar().
    subscribe(value => {
      this.cursos = value;
    },
     error => {
       alert (" Nosso erro: "+error);
     }
    );

    // this.cursosService.listarDescricao().
    // subscribe(value => {
    //   this.cursosDescricao = value;
    // },
    //  error => {
    //    alert (" Nosso erro: "+error);
    //  }
    // );

  }

}
