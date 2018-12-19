import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-celsius',
  templateUrl: './celsius.component.html',
  styleUrls: ['./celsius.component.css']
})
export class CelsiusComponent implements OnInit {

  resultado: string = ''
  erro: string = ''

  constructor() { }



  ngOnInit() {
  }

  converter(valor: number){
    var cel: number
    cel = (valor - 32)*5/9

    //var result = parseFloat(valor)
    if (valor && !isNaN(cel)){
      this.resultado = 'Celsius: ' + cel.toFixed(2) + ' °C'
      this.erro = ''
    } else {
      this.erro = 'Campo inválido!'
      this.resultado = ''
    }
  }

  limpar(){
    this.resultado = ''
    this.erro = ''
  }
}
