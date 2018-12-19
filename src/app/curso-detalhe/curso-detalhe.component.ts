import { Component, OnInit } from '@angular/core';
//import { Pedido } from 'src/app/shared/model/pedido';
import { CursosService } from 'src/app/shared/services/cursos.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Curso } from 'src/app/shared/model/curso';



@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.css']
})
export class CursoDetalheComponent implements OnInit {

  id: string;
  inscricao: Subscription;
  curso: Curso;

    constructor(private cursoService:CursosService,
      private route: ActivatedRoute,
      private router: Router ) { }


    ngOnInit() {
      this.inscricao = this.route.params.subscribe(params => {
                                                      this.id = params['id'];
  
                                                      console.log ('O id é: '+this.id);
  
                                                      this.cursoService.buscar(this.id).subscribe(value => {
                                                        this.curso = value;
                                                        },
                                                        error => {
                                                        alert('Erro do servidor durante a consulta de cursos!');
                                                        });
                                                    });      
    }
}
