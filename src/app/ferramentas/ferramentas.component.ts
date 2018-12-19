//Exercicio 8

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ferramentas',
  templateUrl: './ferramentas.component.html',
  styleUrls: ['./ferramentas.component.css']
})
export class FerramentasComponent implements OnInit {

  resultado: string = '';

  constructor() { }

  ngOnInit() {
  }

  onMudou(dados: any) {
    this.resultado = dados.result ;
  }
}
