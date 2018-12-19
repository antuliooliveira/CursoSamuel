import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import {PRODUTOS,PAGAMENTOS,Pedido } from '../shared/model/pedido';

@Component({
  selector: 'app-tdpedidos',
  templateUrl: './tdpedidos.component.html',
  styleUrls: ['./tdpedidos.component.css']
})
export class TDPedidosComponent implements OnInit {

  pedidos : Pedido[];
  
  constructor() { }

  ngOnInit() {
    this.pedidos = [];
  }

  get produtos(){
    return PRODUTOS;
  }

  get formaPagamentos(){
    return PAGAMENTOS;
  }

  onSubmit(form: NgForm){
    const dados = form.value;
    const pedidoTela = new Pedido(parseInt(dados.idxProduto),parseInt (dados.idxForma),parseInt (dados.quantidade));
    this.pedidos.push (pedidoTela);
    
    form.reset(new Pedido());
  }

  get listarPedidos(): Pedido[]{
    return this.pedidos;
  }

  public totalGeral() : number {
   
    let totalizador : number = 0;
  
    for (let ped of this.pedidos) {
      totalizador += ped.total;
    }
  
    return totalizador;
  }

}
