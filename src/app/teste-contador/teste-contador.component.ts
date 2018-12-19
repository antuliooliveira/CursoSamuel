// Exercicio sobre Output Propertie

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teste-contador',
  templateUrl: './teste-contador.component.html',
  styleUrls: ['./teste-contador.component.css']
})
export class TesteContadorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onMudou(dados: any) {
    alert(dados.novoValor);
    alert(dados.msg);
  }

}
