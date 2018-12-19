// Exercicio 8

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})

export class CalculadoraComponent implements OnInit {


  @Input() modo: string;

  @Output() mudou = new EventEmitter();

  valor1Number: number;

  valor2 = '';
  valor2Number: number;

  resultado = '';
  resultadoNumber = 0;
  erroVal1 = '';
  erroVal2 = '';
  memoria = 0;

  constructor() { }

  ngOnInit() {
  }

  validaValores(valor1) {
    this.erroVal1 = '';
    this.erroVal2 = '';

    if (valor1.value === '' || isNaN(valor1.value)) {
      this.erroVal1 = 'Campo Inválido!';
    }

    if (this.valor2 === '') {
      this.erroVal2 = 'Campo Inválido!';
    }

    if (this.erroVal1 !== '' || this.erroVal2 !== '') {
      throw new Error('Method not implemented.');
    }
  }

  validaDivisao() {

    let valor2Zero: number;

    valor2Zero = parseFloat(this.valor2);

    if (valor2Zero === 0) {
      this.erroVal2 = 'Operação inválida! Divisão por zero!';

      throw new Error('Method not implemented.');
    }
  }

  somar(valor1) {
    this.validaValores(valor1);

    this.valor1Number = parseFloat (valor1.value);
    this.valor2Number = parseFloat (this.valor2);

    this.resultadoNumber = this.valor1Number + this.valor2Number;

    this.resultado = this.resultadoNumber.toFixed(2);

    this.mudou.emit({result: this.resultado});

  }

  subtrair(valor1) {

    this.valor1Number = parseFloat (valor1.value);
    this.valor2Number = parseFloat (this.valor2);
    this.resultadoNumber = this.valor1Number - this.valor2Number;

    this.resultado = this.resultadoNumber.toFixed(2);

    this.mudou.emit({result: this.resultado});
  }

  multiplicar(valor1) {
    // this.validaValores(valor1,valor2);

    this.valor1Number = parseFloat (valor1.value);
    this.valor2Number = parseFloat (this.valor2);
    this.resultadoNumber = this.valor1Number * this.valor2Number;

    this.resultado = this.resultadoNumber.toFixed(2);

    this.mudou.emit({result: this.resultado});
  }

  dividir(valor1) {
    this.validaValores(valor1);
    this.validaDivisao();

    this.valor1Number = parseFloat (valor1.value);
    this.valor2Number = parseFloat (this.valor2);
    this.resultadoNumber = this.valor1Number / this.valor2Number;

    this.resultado = this.resultadoNumber.toFixed(2);

    this.mudou.emit({result: this.resultado});
  }

  armazenarMemoria () {
     this.memoria = this.resultadoNumber;
  }

  atribuirMemoriaValor2 () {
    this.valor2 = this.memoria.toFixed(2);
 }

 potencia () {
  this.valor2Number = parseFloat (this.valor2);

  this.resultadoNumber = Math.pow (this.valor2Number, 2 );
  this.resultado = this.resultadoNumber.toFixed(2);

  this.mudou.emit({result: this.resultado});
 }

 raizQuadrada () {
  this.valor2Number = parseFloat (this.valor2);

  this.resultadoNumber = Math.sqrt(this.valor2Number);
  this.resultado = this.resultadoNumber.toFixed(2);

  this.mudou.emit({result: this.resultado});
 }

 limpar() {
  this.valor2 = '';
  this.mudou.emit({result: ''});
 }
}
