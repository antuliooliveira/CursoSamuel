//Exercício 9

import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  @Input() userLabel: string;
  @Input() passwordLabel: string;

  usuario: string;
  senha: string;

  @Output() valida = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  autenticar(){
    let objetoSaida;

    if (this.usuario === 'teste' && this.senha === 'teste'){
      objetoSaida = {resultado:true,msg:'Usuário Logado com Sucesso'};
      this.usuario = '';
      this.senha = '';
    } else {
      objetoSaida = {resultado:false,msg:'Login inválido!'};
    }

    this.valida.emit (objetoSaida);
  }

}
