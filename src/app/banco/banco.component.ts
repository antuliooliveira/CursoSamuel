import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banco',
  templateUrl: './banco.component.html',
  styleUrls: ['./banco.component.css']
})
export class BancoComponent implements OnInit {

  saldoNumber: number;
  valorNumber: number;
  saldoNegativo: string = '';
  saldoSucesso: string = '';

  constructor() { }

  ngOnInit() {
  }

  executar(saldo,valor,operacao) {
    this.saldoNegativo = '';
    this.saldoSucesso = '';

    this.saldoNumber = parseFloat(saldo);
    this.valorNumber = parseFloat(valor);

    if (operacao === '1') {
      this.saldoNumber += this.valorNumber;
    } else if (operacao === '2') {
      this.saldoNumber -= this.valorNumber;
    }

    if (this.saldoNumber < 0) {
      this.saldoNegativo = `Conta com saldo negativo: R$ ${this.saldoNumber.toFixed(2)}`;
    } else {
      this.saldoSucesso = `Operação efetuada com Sucesso. Saldo: R$ ${this.saldoNumber.toFixed(2)}`;
    }
  }
}
