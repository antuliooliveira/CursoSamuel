// Exercicio 10

import { Component, OnInit, Input } from '@angular/core';

import {PRODUTOS,PAGAMENTOS,Pedido } from '../shared/model/pedido'

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  qtdeCompra: number;
  total: number;
  pedidos : Pedido[];

  idxProduto:string;
  idxForma:string;
  qtde:string;

  constructor() { }

  ngOnInit() {
    this.pedidos = [];
    this.idxProduto="";
    this.idxForma="";
    this.qtde="";
  }

  get produtos(){
    return PRODUTOS;
  }

  get formaPagamentos(){
    return PAGAMENTOS;
  }

  incluir(){
    const pedido = new Pedido (parseInt (this.idxProduto),parseInt (this.idxForma),parseInt (this.qtde));

    this.pedidos.push (pedido);
    
    this.limparTela();

  }

  get listarPedidos(): Pedido[]{
    return this.pedidos;
  }

  limparTela(): any {
    this.idxProduto = "";
    this.idxForma = "";
    this.qtde = "";
  }

  public totalGeral() : number {

    let totalizador : number = 0;

    for (let ped of this.pedidos) {
      totalizador += ped.total;
    }

    return totalizador;
  }
}
