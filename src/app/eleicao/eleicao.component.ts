import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eleicao',
  templateUrl: './eleicao.component.html',
  styleUrls: ['./eleicao.component.css']
})
export class EleicaoComponent implements OnInit {

  perValido : number
  perValidoStr : string
  perNulo : number
  perNuloStr : string
  perBranco : number
  perBrancoStr : string
  erroBranco : string = ''
  erroNulo : string = ''
  erroValido : string = ''
  exibe : string = ''
  
  constructor() { }

  ngOnInit() {
  }

  calcular(branco, nulo, valido){

    var brancoNumber = parseInt(branco)
    var nuloNumber = parseInt(nulo)
    var validoNumber = parseInt(valido)
    
    this.erroBranco = ''
    this.erroNulo = ''
    this.erroValido = ''

    if (!Number.isInteger(brancoNumber)){
      this.erroBranco = 'Campo inválido!'
    }

    if (!Number.isInteger(nuloNumber)){
      this.erroNulo = 'Campo inválido!'
    }
    
    if (!Number.isInteger(validoNumber)){
      this.erroValido = 'Campo inválido!'
    }

    if (!this.erroBranco && !this.erroNulo && !this.erroValido ) {
      
       this.exibe = 'teste'
            
       var total = brancoNumber + nuloNumber + validoNumber
       
       this.perBranco = ((brancoNumber/total)*100)
       this.perBrancoStr = this.perBranco.toFixed(2)+'%'
       this.perNulo = ((nuloNumber/total)*100)
       this.perNuloStr = this.perNulo.toFixed(2)+'%'
       this.perValido = ((validoNumber/total)*100)
       this.perValidoStr = this.perValido.toFixed(2)+'%'
    }
  }
}