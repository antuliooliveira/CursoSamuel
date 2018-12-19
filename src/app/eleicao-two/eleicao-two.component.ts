import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eleicao-two',
  templateUrl: './eleicao-two.component.html',
  styleUrls: ['./eleicao-two.component.css']
})
export class EleicaoTwoComponent implements OnInit {

  perValido : number;
  perValidoStr : string;
  perNulo : number;
  perNuloStr : string;
  perBranco : number;
  perBrancoStr : string;
  erroBranco : string = '';
  erroNulo : string = '';
  erroValido : string = '';
  exibe : string = '';
  branco: string;
  nulo: string;
  valido: string;
  
  constructor() { }

  ngOnInit() {
  }

  limparVariaveis(){
    this.erroBranco = '';
    this.erroNulo = '';
    this.erroValido = '';
    this.perBranco = null;
    this.perBrancoStr = '';
    this.perNulo = null;
    this.perNuloStr = '';
    this.perValido = null;
    this.perValidoStr = '';
    this.exibe = '';
  }

  calcular(){

    this.limparVariaveis();

    var brancoNumber = parseInt(this.branco);
    var nuloNumber = parseInt(this.nulo);
    var validoNumber = parseInt(this.valido);
    
    if (!Number.isInteger(brancoNumber)){
      this.erroBranco = 'Campo inválido!';
    }

    if (!Number.isInteger(nuloNumber)){
      this.erroNulo = 'Campo inválido!';
    }
    
    if (!Number.isInteger(validoNumber)){
      this.erroValido = 'Campo inválido!';
    }

    if (!this.erroBranco && !this.erroNulo && !this.erroValido ) {
      
       this.exibe = 'teste';
            
       var total = brancoNumber + nuloNumber + validoNumber;
       
       this.perBranco = ((brancoNumber/total)*100);
       this.perBrancoStr = this.perBranco.toFixed(2)+'%';
       this.perNulo = ((nuloNumber/total)*100);
       this.perNuloStr = this.perNulo.toFixed(2)+'%';
       this.perValido = ((validoNumber/total)*100);
       this.perValidoStr = this.perValido.toFixed(2)+'%';
    }
  }
}