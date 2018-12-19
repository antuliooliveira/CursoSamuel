//Exercício 9

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  autenticado : boolean = false;
  erroMsg : string = '';

  constructor() { }

  ngOnInit() {
  }
  
  onValida(dados: any ){
    this.erroMsg = '';

    this.autenticado = dados.resultado;
    
    if (!this.autenticado) {
      this.erroMsg = dados.msg;
    }
  }

  logout(){
    this.autenticado = false;
  }

}
